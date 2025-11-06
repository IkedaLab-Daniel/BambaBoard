import { useState } from "react"
import toast from "react-hot-toast";

const Form: React.FC = () => {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleAddQuestion = (e:React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const addQuestionPromise = fetch('http://127.0.0.1:8000/api/quizes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        question: question,
        answer: answer
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add question');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setQuestion("");
      setAnswer("");
      setIsLoading(false)
      return data;
    })
    .catch(error => {
      setIsLoading(false);
      throw error; // Re-throw so toast.promise can catch it
    });

    toast.promise(
      addQuestionPromise,
      {
        loading: 'Adding question...',
        success: <b>Question added successfully!</b>,
        error: <b>Could not add question.</b>,
      }
    );
  }

  return (
    <form className='max-w-[1200px] mx-auto flex pt-20 flex-col gap-2' onSubmit={(e) => handleAddQuestion(e)}>
      <label className="text-4xl">Question:</label>
      <input 
        type="text" 
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter your question" 
        className="w-full text-xl px-4 py-3 border bg-white border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent" 
      />

      <label className="text-4xl mt-2">Answer:</label>
      <input 
        type="text" 
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Enter the correct answer" 
        className="w-full text-xl px-4 py-3 border bg-slate-50 border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent" 
      />
      <button 
        type="submit"
        className="mt-4 border-[#435663] bg-[#435663] text-[#FFF8D4] font-bold p-4 text-center text-xl rounded-xl hover:cursor-pointer hover:scale-[101%] transition duration-500 active:scale-[97%] active:opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isLoading}
      >Let's Goooo!
      </button>
    </form>
  )
}

export default Form

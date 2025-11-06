import { useState } from "react"

const Form: React.FC = () => {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");


  const handleAddQuestion = (e:React.FormEvent) => {
    e.preventDefault();
    
    try{
        fetch('http://127.0.0.1:8000/api/quizes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                question: question,
                answer: answer
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error: ', error))
    } catch (err){
        console.log("Error add: ", err);
    } finally {
        setQuestion("")
        setAnswer("")
    }
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
        className="mt-4 border-[#435663] bg-[#435663] text-[#FFF8D4] font-bold p-4 text-center text-xl rounded-xl hover:cursor-pointer hover:scale-[101%] transition duration-500 active:scale-[97%] active:opacity-50"
      >Let's Goooo!
      </button>
    </form>
  )
}

export default Form

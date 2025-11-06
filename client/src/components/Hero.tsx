
const Hero: React.FC = () => {
  return (
    <div className='max-w-[1200px] mx-auto flex pt-20'>
        <div className="w-[70%]">
            <h1 className="text-6xl font-bold">The Quiz Board</h1>
            <p className="text-xl">Answer random question, or create random question...</p>
        </div>

        <div className="flex flex-col gap-2 w-[30%]">
            <span className="border-3 border-[#435663] bg-[#435663] text-[#FFF8D4] font-bold p-4 text-center text-xl rounded-xl hover:cursor-pointer hover:scale-[105%] transition duration-500 active:scale-[97%] active:opacity-50">Start</span>
            <span className="border-3 border-[#435663] text-[#435663] p-4 text-center text-xl font-bold rounded-xl hover:cursor-pointer hover:scale-[105%] transition duration-500 active:scale-[97%] active:opacity-50">Create</span>
        </div>
       
    </div>
  )
}

export default Hero

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-[100vh] bg-slate-700'>
      <h1 className='text-2xl'>Hello Hi</h1>
    </div>
  )
}

export default App

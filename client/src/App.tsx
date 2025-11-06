import { Toaster } from 'react-hot-toast'
import './App.css'
import Form from './components/Form'
import Hero from './components/Hero'

function App() {
  return (
    <div className='main p-4'>
      <Hero />
      <Form />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  )
}

export default App

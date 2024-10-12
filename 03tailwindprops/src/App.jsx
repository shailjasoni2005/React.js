import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"shailja",
    age:21
  }
  let newArray = [1,2,3]

  return (
    <>
      <h1 className='bg-green-500 text-black  p-4 rounded-xl mb-2'>Tailwind test</h1>
      <Card username="shailja" btnText="click me"/>
      <Card username="harsh"/>
    </>
  )
}

export default App

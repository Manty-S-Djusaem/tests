import { useState } from 'react'
import './App.css'
import Question from './questt/questt.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Question />
    </div>
  )
}

export default App

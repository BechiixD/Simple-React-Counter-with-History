import { createContext, useState } from "react"
import Counter from "./Counter"
import History from "./History"

export const CountContext = createContext()

function App() {
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState([])

  return (
    <div>
      <CountContext.Provider value={{ history, setHistory }}>
        <Counter count={count} setCount={setCount} />
        <History setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}

export default App

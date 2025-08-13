import { useContext } from "react"
import { CountContext } from "./App"

function Counter({count, setCount}) {

    const {history, setHistory} = useContext(CountContext)

    function addCount() {
        const c = count + 1
        setHistory([...history, c])
        setCount(c)
    }
    function subtractCount() {
        const c = count - 1
        setHistory([...history, c])
        setCount(c)
    }
    function resetCount() {
        const c = 0
        setHistory([...history, c])
        setCount(c)
    }



    return(
        <div className="count-container">
            {count}
            <div>
                <button onClick={addCount} className="add-button">Add</button>
                <button onClick={subtractCount} className="subtract-button">Remove</button>
            </div>
        </div>
    )
}

export default Counter
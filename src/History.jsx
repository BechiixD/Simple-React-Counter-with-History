import { useContext } from "react"
import { CountContext } from "./App"

function History({setCount}) {

    const {history, setHistory} = useContext(CountContext)

    function resetHistory() {
        setHistory([])
    }

    function handleGoBack(index) {
        setHistory(h => h.slice(0, index + 1))
        setCount(history[index])
    }

    return(
        <div className="history-container">
            <ol className="history-list">
                {history.map((step, index) => <li key={index} onClick={() => handleGoBack(index)} className="history-element">{step}</li> )}
            </ol>
            <button onClick={resetHistory} className="reset-button">Reset history</button>
        </div>
    )
}

export default History
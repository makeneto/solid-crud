import { useState, useEffect } from "react"

export default function OtherResults({ value, numResults }) {
    const [resultWord, setResultWord] = useState('')

    useEffect(() => {
        numResults === 1 ? setResultWord('resultado') : setResultWord('resultados')
    }, [numResults])

    return (
        <div>
            {numResults > 0 && value > 0 &&
                <p className="otherResult">{numResults} {resultWord}</p>
            }
        </div>
    )
}
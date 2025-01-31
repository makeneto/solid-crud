import { useState, useEffect } from "react"

// Componente cria e configura o número dos jogos encontrados consoante a pesquisa
export default function SearchResults({ value, numResults }) {
    const [resultWord, setResultWord] = useState('')

    useEffect(() => {
        numResults === 1 ? setResultWord('resultado') : setResultWord('resultados')
    }, [numResults])

    return (
        <div className="search__management">
            {numResults > 0 ?
                <h1>{numResults} {resultWord} para “<span className="blue__word no-capitalize">{value}</span>”</h1>
                :
                <h1>Jogo não encontrado. <span className="blue__word no-capitalize">Tente outro título!</span></h1>
            }
        </div>
    )
}

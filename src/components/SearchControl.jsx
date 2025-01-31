import React, { memo } from "react"

// Componente que cria e configura a caixa de seleção de opções
const SearchControl = memo(({ select, setSelect, onHandleFilters }) => {

    return (
        <div className="search__control">
            <div className="search__filterContainer" onClick={onHandleFilters} >
                <div className="search__filterContainer--filter">
                    <h3>Filtro</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                    </svg>

                </div>
            </div>

            <div className="select__container">
                <select
                    value={select}
                    onChange={(e) => setSelect(e.target.value)}
                >
                    <option value='none'>...</option>
                    <option value='all'>Todos</option>
                    <option value='bestsellers'>Mais comprados</option>
                    <option value='mostRated'>Mais avaliados</option>
                    <option value='highestRating'>Classificação mais alta</option>
                    <option value='newest'>Mais novo</option>
                </select>

                <label className='onOption'>Classificar por:</label>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="select__arrow">
                    <path d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                </svg>

            </div>
        </div>
    )
})

export default SearchControl
import { useState, useEffect, useCallback } from 'react'

import gameData from '../components/Data'
import SearchInput from '../components/SearchInput'
import SearchResults from '../components/SearchResults'
import OtherResults from '../components/OtherResults'
import SearchControl from '../components/SearchControl'
import ToggleDemo from '../components/ToggleDemo'
import SelectRatings from '../components/SelectRatings'
import SearchNotFound from '../components/SearchNotFound'
import Games from '../components/Games'
import DoneButton from '../components/DoneButton'
import CartButton from '../components/CartButton'
import ExpandCart from '../components/ExpandCart'
import NavBars from '../components/NavBars'
import Footer from '../components/Footer'

export default function SearchPage({ cart, setCart, currentTotal, oldTotal, isLoggedIn, setIsLoggedIn }) {
    let filteredGames
    const [searchValue, setSearchValue] = useState('')
    const lowerSearch = searchValue.toLowerCase()
    const [selectControl, setSelectControl] = useState('none')
    const [toggleDemo, setToggleDemo] = useState(false)
    const [fourDotFive, setFourDotFive] = useState(false)
    const [four, setFour] = useState(false)
    const [threeDotFive, setThreeDotFive] = useState(false)
    const [three, setThree] = useState(false)
    const [filters, setFilters] = useState(true)
    const viewPort = window.innerWidth
    const [cartHovered, setCartHovered] = useState(false)

    useEffect(() => {
        if (viewPort < 1024) {
            setFilters(false)
        }
    }, [viewPort, setFilters])

    const handleMouseEnter = useCallback(() => {
        setCartHovered(true)
    }, [setCartHovered])

    const handleMouseLeave = useCallback(() => {
        setCartHovered(false)
    }, [setCartHovered])

    // Filtrar o array dos jogos e trazer os jogos cujo o texto pesquisado é igual ao título
    if (searchValue.length === 0) {
        filteredGames = gameData
            .filter((game) => game.initialSearch === 'yes')
            .sort((a, b) => {
                const dateA = new Date(a.date.split('/').reverse().join('-'))
                const dateB = new Date(b.date.split('/').reverse().join('-'))
                return dateB - dateA
            })
    }

    // Trazer todos os jogos quando o campo de pesquisa é preenchido
    useEffect(() => {
        if (searchValue.length >= 1) {
            setSelectControl('all')
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        else {
            setSelectControl('none')
        }
    }, [searchValue, setSelectControl])

    useEffect(() => {
        if (selectControl === 'bestsellers') {
            setFourDotFive(false)
            setFour(false)
            setThreeDotFive(false)
            setThree(false)
        }
    }, [selectControl, setFourDotFive, setFour, setThreeDotFive, setThree, setFilters])


    // Reagir a seleção de filtro
    if (searchValue.length >= 1) {
        filteredGames = gameData
            .filter((data) => data.title.toLowerCase()
                .includes(lowerSearch))
    }
    else if (selectControl === 'none') {
        filteredGames = gameData
            .filter((game) => game.initialSearch === 'yes')
            .sort((a, b) => {
                const dateA = new Date(a.date.split('/').reverse().join('-'))
                const dateB = new Date(b.date.split('/').reverse().join('-'))
                return dateB - dateA
            })
    }
    else if (selectControl === 'all') {
        filteredGames = gameData
            .filter((data) => data.description.length > 1)
    }
    else if (selectControl === 'bestsellers') {
        filteredGames = gameData
            .filter((data) => data.bestSeller === 'yes')
    }
    else if (selectControl === 'mostRated') {
        filteredGames = gameData.sort((a, b) => b.numRatings - a.numRatings)
    }
    else if (selectControl === 'highestRating') {
        filteredGames = gameData
            .filter((data) => data.rating === 5)
    }
    else if (selectControl === 'newest') {
        filteredGames = gameData.sort((a, b) => {
            const dateA = new Date(a.date.split('/').reverse().join('-'))
            const dateB = new Date(b.date.split('/').reverse().join('-'))
            return dateB - dateA
        })
    }

    // Reagir as opções de classificação
    if (fourDotFive) {
        filteredGames = gameData
            .filter((data) => data.rating >= 4.5)
    }
    else if (four) {
        filteredGames = gameData
            .filter((data) => data.rating >= 4)
    }
    else if (threeDotFive) {
        filteredGames = gameData
            .filter((data) => data.rating >= 3.5)
    }
    else if (three) {
        filteredGames = gameData
            .filter((data) => data.rating >= 3)
    }

    // Reagir ao Toggle e mostrar os Jogos DEMOs
    if (toggleDemo) {
        filteredGames = gameData
            .filter((data) => data.type === 'free' && data.title.toLowerCase()
                .includes(lowerSearch))
    }

    const handleFilters = useCallback(() => {
        setFilters(!filters)
    }, [filters])

    return (
        <>
            <NavBars isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

            <div className={!filters && filteredGames.length === 0 ? 'search__container--large' : 'search__container'}>
                <div className='search__features'>
                    <aside className='aside'>
                        <div className="dynamic__controls">
                            <div className={viewPort >= 320 && viewPort < 1024 && filters ? 'brightness' : ''}>
                                {searchValue.length > 0 &&
                                    <SearchResults
                                        value={searchValue}
                                        numResults={filteredGames.length}
                                    />
                                }
                                {filteredGames.length > 0 &&
                                    <SearchControl
                                        viewPort={viewPort}
                                        filters={filters}
                                        onHandleFilters={handleFilters}
                                        select={selectControl}
                                        setSelect={setSelectControl}
                                    />
                                }
                            </div>
                            <div className={viewPort >= 320 && viewPort < 1024 && filters ? 'brightness search__cart' : 'search__cart'}>
                                <SearchInput
                                    value={searchValue}
                                    setValue={setSearchValue}
                                />
                                <CartButton
                                    cart={cart}
                                    setOnMouseEnter={handleMouseEnter}
                                    setOnMouseLeave={handleMouseLeave}
                                />
                                <ExpandCart
                                    cart={cart}
                                    setCart={setCart}
                                    currentTotal={currentTotal}
                                    oldTotal={oldTotal}
                                    cartHovered={cartHovered}
                                    setOnMouseEnter={handleMouseEnter}
                                    setOnMouseLeave={handleMouseLeave}
                                />
                            </div>
                        </div>
                        <div className='dynamic__controls no-borderB'>
                            {filters && filteredGames.length > 0 &&
                                <aside>
                                    <ToggleDemo
                                        toggleDemo={toggleDemo}
                                        setToggleDemo={setToggleDemo}
                                        selectControl={selectControl}
                                    />
                                    <SelectRatings
                                        fourDotFive={fourDotFive}
                                        setFourDotFive={setFourDotFive}
                                        four={four}
                                        setFour={setFour}
                                        threeDotFive={threeDotFive}
                                        setThreeDotFive={setThreeDotFive}
                                        three={three} setThree={setThree}
                                        toggleDemo={toggleDemo}
                                        setSearchValue={setSearchValue}
                                    />
                                    {viewPort >= 320 && viewPort < 1024 &&
                                        <DoneButton onHandleFilters={handleFilters} />
                                    }
                                </aside>
                            }
                            {/* Se nenhum jogo for encontrado mostrar uma informação e um texto */}
                            <main className={viewPort >= 320 && viewPort < 1024 && filters ? 'brightness main' : 'main'}>
                                <OtherResults numResults={filteredGames.length} value={searchValue.length} />
                                {filteredGames.length > 0 ?
                                    <Games filteredGames={filteredGames} setCart={setCart} cart={cart} />
                                    :
                                    <SearchNotFound
                                        imgUrl={"images/search-not-found.webp"}
                                        imgAlt={"Search not found image"}
                                        filters={filters}
                                        numResults={filteredGames.length}
                                    />
                                }
                            </main>
                        </div>
                    </aside>
                </div>
            </div>

            <Footer />
        </>
    )
}
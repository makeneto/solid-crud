import { memo, useState, } from "react"

// Componente que cria e configura cada jogo mostrado na tela de pesquisa
const SingleGame = memo(({ gameObj, setCart, cart }) => {
    const {
        id,
        link,
        image,
        title,
        description,
        publisher,
        newPrice,
        oldPrice,
        rating,
        numRatings
    } = gameObj

    const [hovered, setHovered] = useState(false)
    const viewport = window.innerWidth

    // Verificar se o jogo já está no carrinho
    const isInCart = (gameId) => cart.some((item) => item.id === gameId)

    const addToCart = (e, game) => {
        e.preventDefault()

        setCart((prevCart) => [game, ...prevCart]);
    }

    return (
        <a
            href={link}
            className='game'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img
                src={image}
                alt='Capa do Jogo'
                className='game__img'
            />
            <div className="game__block">
                <div className='game__content'>
                    <div className='game__info'>
                        <h3>{title}</h3>
                        <p className='small__text cart__items--item--content--primary--description'>
                            {description}
                        </p>
                        <p className="game__publisher">{publisher}</p>
                    </div>
                    <div className='game__prices'>
                        <p className='game__prices--new'>{newPrice}</p>
                        <span className='game__prices--old'>{oldPrice}</span>
                    </div>
                </div>
                <div className="game__down">
                    <div className="game__rating">
                        <p>{rating}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="#ffffff"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                        <p>({numRatings})</p>

                        {!isInCart(id) && viewport >= 1024 &&
                            <ButtonPc gameObj={gameObj} hovered={hovered} setHovered={setHovered} addToCart={addToCart} />
                        }

                        {!isInCart(id) && viewport < 1024 &&
                            <ButtonPhone gameObj={gameObj} addToCart={addToCart} />
                        }

                        {isInCart(id) &&
                            <p className="onCart small__text">No Carrinho</p>
                        }
                    </div>
                </div>
            </div>
        </a>
    )
})

export default SingleGame

const ButtonPc = memo(({ gameObj, hovered, addToCart }) => {
    const {
        type,
    } = gameObj

    return (
        <>
            {type === 'paid' && hovered &&
                <button
                    type="button"
                    className="game__down__bg"
                    onClick={(e) => addToCart(e, gameObj)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="game__down__bg--svg">
                        <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </button>
            }
        </>
    )
})

const ButtonPhone = memo(({ gameObj, addToCart }) => {
    const {
        type,
    } = gameObj

    return (
        <>
            {type === 'paid' &&
                <button
                    type="button"
                    className="game__down__bg"
                    onClick={(e) => addToCart(e, gameObj)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="game__down__bg--svg">
                        <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </button>
            }
        </>
    )
})
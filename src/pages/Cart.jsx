import { useCallback, useState } from "react"
import { Link } from "react-router-dom"

import NavBars from "../components/NavBars"
import CartItem from "../components/CartItem"
import CartZero from "../components/CartZero"
import InsertedCupomIcon from "../components/InsertedCupomIcon"
import Footer from "../components/Footer"


export default function Cart({ cart, setCart, currentTotal, oldTotal, isLoggedIn, setIsLoggedIn }) {

    return (
        <div>
            {cart.length > 0 &&
                <CartMain
                    cart={cart}
                    setCart={setCart}
                    currentTotal={currentTotal}
                    oldTotal={oldTotal}
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                />
            }

            {cart.length === 0 &&
                <CartZero cart={cart} />
            }
        </div>
    )
}

function CartMain({ cart, setCart, currentTotal, oldTotal, isLoggedIn, setIsLoggedIn }) {
    const [cupomCode, setCupomCode] = useState('')
    const [cupomMessage, setCupomMessage] = useState('')
    const [cupomState, setCupomState] = useState(false)
    const UpperCupom = cupomCode.toUpperCase()
    const cupomCount = Number(currentTotal) * 30 / 100
    const insertedCupom = Number(currentTotal) - cupomCount

    const checkCupom = useCallback((e) => {
        e.preventDefault()

        if (
            UpperCupom === 'SOLIDGAMES' ||
            UpperCupom === 'MAKENE' ||
            UpperCupom === 'CESARIO' ||
            UpperCupom === 'MAYALA' ||
            UpperCupom === 'MATEUS' ||
            UpperCupom === 'NUBELSON'
        ) {
            setCupomMessage('Cupom aplicado com sucesso')
            setCupomCode('')
            setCupomState(true)
        }
        else {
            setCupomMessage('O código de cupom inserido não é válido')
            setCupomState(false)
        }
    }, [UpperCupom])

    function applySolidCupom() {
        setCupomCode('SOLIDGAMES')
    }

    return (
        <>
            <NavBars isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <div className="cart">
                <h1 className="cart__title">Carrinho de Compras</h1>
                <div className="cart__container">
                    <div className="cart__itemsPage">
                        <h5 className="cart__length blue__word no-capitalize">{cart.length} jogos no carrinho</h5>
                        <ul className="cart__items--container">
                            {cart.map((game) => (
                                <CartItem
                                    setCart={setCart}
                                    cart={cart}
                                    cartObj={game}
                                    key={game.id}
                                />
                            ))}
                        </ul>
                    </div>

                    <div className="cart__info">
                        <div className="cart__info--primary">
                            <h2>Total:</h2>
                            <h1>
                                {!cupomState ? currentTotal : insertedCupom.toFixed(3)} AOA
                                {cupomState &&
                                    <InsertedCupomIcon />
                                }
                            </h1>
                            <h4>{oldTotal} AOA</h4>
                            <p>40% de desconto</p>
                            <Link to='/'>
                                <button className="cart__info--primary--btn">Adicionar jogos</button>
                            </Link>
                        </div>
                        <div className="cart__info--secondary">
                            <div className="cart__info--secondary-first">
                                <h5>Promoções Exclusivas</h5>
                                <div className="cart__info--secondary--promotion">
                                    <div>
                                        <p>Mais 30% off em jogos</p>
                                        <p className="cart__info--secondary--promotion--cupom">SOLIDGAMES</p>
                                    </div>
                                    <h4 onClick={applySolidCupom}>Aplicar</h4>
                                </div>
                            </div>
                            <form className="cart__info--secondary-second" onSubmit={checkCupom}>
                                <input
                                    type="text"
                                    value={cupomCode}
                                    onChange={(e) => setCupomCode(e.target.value)}
                                    placeholder="Inserir Cupom"
                                    className="cart__info--secondary-second--input"
                                />
                                <input
                                    type="submit"
                                    value='Aplicar'
                                    className="cart__info--secondary-second--btn"
                                />
                            </form>
                            <p className={`${cupomState ? 'cart__info--secondary-second--sucess' : 'cart__info--secondary-second--error'}`}>{cupomMessage}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
import { useState, useEffect, memo } from "react"
import { Link } from "react-router-dom"

const CartZero = memo(({ cart }) => {
    const [lengthWord, setLengthWord] = useState('')

    useEffect(() => {
        if (cart.length === 0) {
            setLengthWord('Sem jogos no carrinho')
        }
    }, [cart])

    return (
        <div className="cart">
            <div className="cart__container--zero">
                <>
                    <h5 className="cart__length--zero blue__word no-capitalize">{lengthWord}</h5>

                    <div className="cart__itemsPage--zero">
                        <div>
                            <img src="/images/add-to-cart.png" alt="Add to Cart Illustration" className="cart__itemsPage--zero--image" />
                            <p>Seu carrinho está vazio. Continue procurando para encontrar um jogo</p>
                            <Link to='/'>
                                <button>Continuar comprando</button>
                            </Link>
                        </div>
                    </div>
                </>
            </div>
        </div>
    )
})

export default CartZero
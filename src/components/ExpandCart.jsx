import { Link } from "react-router-dom"
import ExpandCartItem from "../components/ExpandCartItem"


export default function ExpandCart({ cart, setCart, currentTotal, oldTotal, setOnMouseEnter, setOnMouseLeave, cartHovered }) {

    return (
        <div
            className={cartHovered && cart.length > 0 ? 'cart__expand--visible' : 'cart__expand'}
            onMouseEnter={setOnMouseEnter}
            onMouseLeave={setOnMouseLeave}
        >
            <div className="cart__expand__container">
                <div className="cart__expand__itemsPage">
                    <ul className="cart__expand__items--container">
                        {cart.map((game) => (
                            <ExpandCartItem
                                setCart={setCart}
                                cart={cart}
                                expandCartObj={game}
                                key={game.id}
                            />
                        ))}
                    </ul>

                    <div className="cart__expand__info">
                        <h1>
                            Total: {currentTotal} AOA
                            <span>{oldTotal} AOA</span>
                        </h1>

                        <Link to='cart'>
                            <button>Ir para o carrinho</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function CartItem({ cartObj, setCart }) {
    const {
        link,
        id,
        image,
        title,
        description,
        publisher,
        newPrice,
        oldPrice,
        rating,
        numRatings,
    } = cartObj

    const removeFromCart = (e, id) => {
        e.preventDefault()

        setCart((prevCart) =>
            prevCart.filter((jogo) => jogo.id !== id)
        )
    }

    return (
        <a href={link} className="cart__items--item">
            <img src={image} alt="" className="cart__itemsPage--item--image" />

            <div className="cart__items--item--content">
                <div className="cart__items--item--content--primary">
                    <h2 className="cart__items--item--content--primary--title">{title}</h2>
                    <p className="cart__items--item--content--primary--description small__text">{description}</p>
                    <p className="cart__items--item--content--primary--publisher">{publisher}</p>

                    <div className="cart__items--item--content--primary--rating">
                        <p>{rating}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="#ffffff"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                        <p>({numRatings})</p>
                    </div>
                </div>

                <div className="cart__items--gears">
                    <button type="button" className="cart__items--item--remove">
                        <p onClick={(e) => removeFromCart(e, id)}>
                            Remover
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" /></svg>
                        </p>
                    </button>
                    <div className="cart__items--item--price">
                        <p className='cart__items--item--price--new'>{newPrice}</p>
                        <span className='cart__items--item--price--old'>{oldPrice}</span>
                    </div>
                </div>
            </div>
        </a>
    )
}
export default function CartItem({ expandCartObj }) {
    const {
        link,
        // id,
        image,
        title,
        // description,
        publisher,
        newPrice,
        oldPrice,
        // rating,
        // numRatings,
    } = expandCartObj

    return (
        <a href={link} className="cart__expand__items--item">
            <img src={image} alt="" className="cart__expand__itemsPage--item--image" />

            <div className="cart__expand__items--item--content">
                <h2 className="cart__expand__items--item--content--title">{title}</h2>
                <p className="cart__expand__items--item--content--publisher">{publisher}</p>

                <div className="cart__expand__items--item--price">
                    <p className='cart__expand__items--item--price--new'>{newPrice}</p>
                    <span className='cart__expand__items--item--price--old'>{oldPrice}</span>
                </div>
            </div>
        </a>
    )
}
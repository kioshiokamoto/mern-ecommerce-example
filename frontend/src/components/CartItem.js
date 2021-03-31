import { Link } from 'react-router-dom';
import './CartItem.css';

const CartItem = ({ id, name, imageUrl, price, qty, countInStock, qtyChangeHandler, removeFromCart }) => {
	return (
		<div className="cartitem">
			<div className="cartitem__image">
				<img src={imageUrl} alt={name} />
			</div>
			<Link to={`/product/${id}`} className="cartitem__name">
				<p>{name}</p>
			</Link>
			<p className="cartitem__price">${price}</p>
			<select className="cartitem__select" value={qty} onChange={(e) => qtyChangeHandler(id, e.target.value)}>
				{[...Array(countInStock).keys()].map((x) => (
					<option key={x + 1} value={x + 1}>
						{x + 1}
					</option>
				))}
			</select>
			<button className="cartitem__deleteBtn" onClick={() => removeFromCart(id)}>
				<i className="fas fa-trash"></i>
			</button>
		</div>
	);
};

export default CartItem;

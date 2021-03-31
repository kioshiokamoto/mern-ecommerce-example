import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';
import './CartScreen.css';

const CartScreen = () => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const qtyChangeHandler = (id, qty) => {
		dispatch(addToCart(id, qty));
	};
	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id));
	};
	const getCartCount = () => {
		return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
	};
	const getCartSubTotal = () => {
		return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
	};

	return (
		<div className="cartscreen">
			<div className="cartscreen__left">
				<h2>Shopping Cart</h2>
				{cartItems.length === 0 ? (
					<div>
						Your cart is empty. <Link to="/">Go back</Link>
					</div>
				) : (
					cartItems.map((item) => (
						<CartItem
							key={item.product}
							id={item.product}
							name={item.name}
							imageUrl={item.imageUrl}
							price={item.price}
							qty={item.qty}
							countInStock={item.countInStock}
							qtyChangeHandler={qtyChangeHandler}
							removeFromCart={removeFromCartHandler}
						/>
					))
				)}
			</div>
			<div className="cartscreen__right">
				<div className="cartscreen__info">
					<p>Subtotal ({getCartCount()}) items</p>
					<p>${getCartSubTotal()}</p>
				</div>

				<div>
					<button>Proceed to checkout</button>
				</div>
			</div>
		</div>
	);
};

export default CartScreen;

import { useSelector } from "react-redux";

import css from "./CartModal.module.css";

const CartModal = () => {
	const cart = useSelector(state => state.pizzaCart);

	return (
		<div>
			<ul className={css.cart}>
				{cart.pizzas.map(pizza => (
					<li key={pizza.id}>
						<img src={process.env.PUBLIC_URL + pizza.imgURL} alt={pizza.title} />
						<h1>{pizza.title}</h1>
						<h4>Size: {pizza.size}</h4>
						<div>
							<span>{pizza.price}</span> X <span>{pizza.count}</span>
						</div>
					</li>
				))}
			</ul>
			<span>Total: {cart.totalPrice}</span>
		</div>
	);
};
export default CartModal;

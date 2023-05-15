import { ReactComponent as CartImg } from "../../img/svg/cart.svg";
import CustomButton from "../UI/CustomButton";
import { useSelector } from "react-redux";

import css from "./Cart.module.css";

const Cart = () => {
	const { totalPrice, pizzas } = useSelector(state => state.pizzaCart);
	const pizzasTotalCount = pizzas.reduce((sum, pizza) => sum + pizza.count, 0);

	return (
		<div className={css.card}>
			<div className={css.qtyInCart}>
				<span>{pizzasTotalCount < 10 ? "0" + pizzasTotalCount : pizzasTotalCount}</span>
				<CartImg className={css.svg} />
			</div>
			{pizzas.length > 0 && <span className={css.totalPrice}>{totalPrice.toFixed(2)} грн</span>}

			<CustomButton type="input" className={css.button}>
				Замовити
			</CustomButton>
		</div>
	);
};
export default Cart;

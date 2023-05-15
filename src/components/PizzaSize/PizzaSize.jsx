import { useDispatch, useSelector } from "react-redux";
import { selectSize } from "../Cart/pizzaCardSlice";
import css from "./PizzaSize.module.css";

const PizzaSize = ({ id }) => {
	const dispatch = useDispatch();
	const { pizzaCart } = useSelector(state => state);

	const pizzaSize = ["Стандарт", "Велика", "Екстравелика", "Найбільша"];

	const changeSize = obj => {
		dispatch(selectSize(obj));
	};
	return (
		<div className={css.pizzaSize}>
			{pizzaSize.map((size, index) => (
				<div
					className={pizzaCart.pizzas.find(item => item.id === id && item.size === size) ? css.active : ""}
					onClick={() => changeSize({ size, id })}
					key={index}
				>
					{size}
				</div>
			))}
		</div>
	);
};
export default PizzaSize;

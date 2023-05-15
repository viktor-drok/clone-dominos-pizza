import { useDispatch, useSelector } from "react-redux";
import { selectDough } from "../Cart/pizzaCardSlice";

import css from "./Dough.module.css";

const Dough = ({ id }) => {
	const dispatch = useDispatch();
	const { pizzaCart } = useSelector(state => state);

	const pizzaDough = ["Пухке", "Тонке"];

	const changeDough = obj => {
		dispatch(selectDough(obj));
	};

	return (
		<div className={css.dough}>
			<span>Тісто</span>
			{pizzaDough.map((dough, index) => (
				<div
					key={index}
					className={pizzaCart.pizzas.find(item => item.id === id && item.dough === dough) ? css.active : ""}
					onClick={() => changeDough({ dough, id })}
				>
					{dough}
				</div>
			))}
		</div>
	);
};
export default Dough;

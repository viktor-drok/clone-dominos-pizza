import { useDispatch, useSelector } from "react-redux";
import { selectBort } from "../Cart/pizzaCardSlice";

import css from "./Bort.module.css";

const Bort = ({ id }) => {
	const dispatch = useDispatch();
	const { pizzaCart } = useSelector(state => state);

	const pizzaBort = ["Філадельфія", "Борт Хот-Дог"];

	const changeBort = obj => {
		dispatch(selectBort(obj));
	};

	return (
		<div className={css.bort}>
			<span>Борт</span>
			{pizzaBort.map((bort, index) => (
				<div
					key={index}
					className={pizzaCart.pizzas.find(item => item.id === id && item.bort === bort) ? css.active : ""}
					onClick={() => changeBort({ bort, id })}
				>
					{bort}
				</div>
			))}
		</div>
	);
};
export default Bort;

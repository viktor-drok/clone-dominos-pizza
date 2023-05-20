import { useEffect, useRef, useState } from "react";
import PizzaCard from "../components/PizzaCard";
import { useDispatch } from "react-redux";
import { pizzaData } from "../fetch/getData";

const Pizza = () => {
	const [value, setValue] = useState("");
	const dispatch = useDispatch();
	const ref = useRef();

	useEffect(() => {
		if (value === "") {
			return;
		}
		dispatch(pizzaData(`?sortBy=price&order=${value}`));
	}, [dispatch, value]);

	if (ref.current !== undefined) {
		console.log(ref.current.value);
	}
	return (
		<section>
			<header
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					padding: "20px 0",
					height: "80px",
				}}
			>
				<div>filter</div>
				<select
					name="Sort"
					ref={ref}
					onChange={() => {
						setValue(ref.current.value);
					}}
				>
					<option value="">Сортувати</option>
					<option value="asc">Ціна низька-висока</option>
					<option value="desc">Ціна висока-низька</option>
				</select>
			</header>

			<section>
				<PizzaCard />
			</section>
		</section>
	);
};
export default Pizza;

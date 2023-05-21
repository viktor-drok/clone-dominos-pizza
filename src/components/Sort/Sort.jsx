import { useEffect, useRef, useState } from "react";
import { pizzaData } from "../../fetch/getData";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import css from "./Sort.module.css";

const Sort = () => {
	const [value, setValue] = useState("");
	const [searchParams, setSearchParams] = useSearchParams();

	const ref = useRef();
	const dispatch = useDispatch();

	useEffect(() => {
		if (value === "") {
			return;
		}
		setSearchParams(`?sortBy=price&order=${value}`);
		dispatch(pizzaData(`?sortBy=price&order=${value}`));
	}, [dispatch, setSearchParams, value]);

	if (ref.current !== undefined) {
		console.log(ref.current.value);
	}

	return (
		<select
			className={css.sort}
			name="Sort"
			ref={ref}
			onChange={() => {
				setValue(ref.current.value);
			}}
		>
			<option className={css.color} value="">
				Сортувати
			</option>
			<option value="asc">Ціна низька-висока</option>
			<option value="desc">Ціна висока-низька</option>
		</select>
	);
};
export default Sort;

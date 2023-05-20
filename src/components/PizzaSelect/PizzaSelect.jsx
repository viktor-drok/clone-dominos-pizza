import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import CustomButton from "../UI/CustomButton";
import { addToCart, removeFromCart } from "../Cart/pizzaCardSlice";
import PizzaSize from "../PizzaSize/PizzaSize";
import Dough from "../Dough/Dough";
import Bort from "../Bort/Bort";

const PizzaSelect = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const navigate = useNavigate();
	const [pizza, setPizza] = useState();
	const { pizzaCart } = useSelector(state => state);

	const onClickAdd = obj => {
		dispatch(addToCart(obj));
	};

	useEffect(() => {
		const getPizza = async () => {
			try {
				const res = await axios.get("https://644a573379279846dce57c9e.mockapi.io/pizza/products/" + id);
				return setPizza(res.data);
			} catch (error) {
				alert(error.message);
				navigate("/pizza");
			}
		};

		getPizza();
	}, [id, navigate]);

	if (!pizza) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<img width="300" height="300" src={`/${pizza.imgURL}`} alt="" />
			<h1>{pizza.title}</h1>
			<p>{pizza.description}</p>
			<PizzaSize />
			<Dough />
			<Bort />
			<h4>Price: {pizza.price}</h4>

			{pizzaCart.pizzas.some(item => item.id === id) ? (
				<CustomButton>
					<span
						onClick={() => {
							dispatch(removeFromCart({ id }));
						}}
					>
						-
					</span>

					{pizzaCart.pizzas.find(item => item.id === id).count}

					<span
						onClick={() => {
							onClickAdd({ id: pizza.id, title: pizza.title, price: pizza.price, imgURL: pizza.imgURL });
						}}
					>
						+
					</span>
				</CustomButton>
			) : (
				<CustomButton
					onClick={() => {
						onClickAdd({ id: pizza.id, title: pizza.title, price: pizza.price, imgURL: pizza.imgURL });
					}}
				>
					В кошик
				</CustomButton>
			)}
		</div>
	);
};
export default PizzaSelect;

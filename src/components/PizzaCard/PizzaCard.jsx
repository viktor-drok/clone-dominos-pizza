import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import CustomButton from "../UI/CustomButton";
import { ReactComponent as CartImg } from "../../img/svg/cart.svg";
import { pizzaData } from "../../fetch/getData";
import { addToCart, removeFromCart } from "../Cart/pizzaCardSlice";
import css from "./PizzaCard.module.css";
import Dough from "../Dough/Dough";
import Bort from "../Bort/Bort";
import PizzaSize from "../PizzaSize/PizzaSize";

const PizzaCard = () => {
	const dispatch = useDispatch();
	const { pizza, pizzaCart } = useSelector(state => state);

	useEffect(() => {
		dispatch(pizzaData(""));
	}, [dispatch]);

	const onClickAdd = obj => {
		dispatch(addToCart(obj));
	};

	return (
		<div className={css.container}>
			{pizza.pizza.map(item => {
				const { id, description, title, imgURL, price } = item;
				return (
					<div key={id} className={css.card}>
						<Link to={id} className={css.cardLink}>
							<img src="./../../img/havaiska-300dpi-min.webp" alt="Pizza" />
							<h3 className={css.cardTitle}>{title}</h3>
							<p className={css.cardDesc}>{description}</p>
						</Link>
						<div className={css.changeIngradients}>Змінити інградієнти</div>
						<PizzaSize id={id} />
						<Dough id={id} />
						<Bort id={id} />
						<div className={css.addToCart}>
							<div className={css.price}>{price} грн</div>
							{pizzaCart.pizzas.some(item => item.id === id) ? (
								<CustomButton className={css.cartButton + " " + css.cartButtonActive}>
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
											onClickAdd({ id, title, imgURL, price });
										}}
									>
										+
									</span>
								</CustomButton>
							) : (
								<CustomButton
									className={css.cartButton}
									onClick={() => {
										onClickAdd({ id, title, imgURL, price });
									}}
								>
									<CartImg />В кошик
								</CustomButton>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
};
export default PizzaCard;

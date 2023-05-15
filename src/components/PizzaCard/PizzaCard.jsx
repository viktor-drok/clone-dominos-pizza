import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import CustomButton from "../UI/CustomButton";
import { ReactComponent as CartImg } from "../../img/svg/cart.svg";
import pizzaData from "../../fetch/getData";
import { addToCart, removeFromCart, selectSize } from "../Cart/pizzaCardSlice";
import css from "./PizzaCard.module.css";

const PizzaCard = () => {
	const dispatch = useDispatch();
	const { pizza, pizzaCart } = useSelector(state => state);

	// const findItem = pizzaCart.find(item => item.size === size);

	const pizzaSize = ["Стандарт", "Велика", "Екстравелика", "Найбільша"];

	const changeSize = obj => {
		dispatch(selectSize(obj));
	};

	useEffect(() => {
		dispatch(pizzaData());
	}, [dispatch]);

	const onClickAdd = obj => {
		dispatch(addToCart(obj));
	};

	return (
		<div className={css.container}>
			{pizza.map(item => {
				const { id, description, title, imgURL, price } = item;
				return (
					<div key={id} className={css.card}>
						<Link to={id} className={css.cardLink}>
							<img src={imgURL} alt="" />
							<h3 className={css.cardTitle}>{title}</h3>
							<p className={css.cardDesc}>{description}</p>
						</Link>
						<div className={css.changeIngradients}>Змінити інградієнти</div>
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
						<div className={css.dough}>
							<span>Тісто</span>
							<div className={css.active}>Пухке</div>
							<div>Тонке</div>
						</div>
						<div className={css.bort}>
							<span>Борт</span>
							<div>Філадельфія</div>
							<div>Борт Хот-Дог</div>
						</div>
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

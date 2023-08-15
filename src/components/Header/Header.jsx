import { Link, NavLink } from "react-router-dom";

import css from "./Header.module.css";
import Logo from "../Logo";
import Cart from "../Cart";

const Header = () => {
	return (
		<header className={css.header}>
			<div className={css.logo}>
				<Link to="/clone-dominos-pizza">
					<Logo />
				</Link>
			</div>
			<nav>
				<div>
					<NavLink to="/clone-dominos-pizza/sets">Набори</NavLink>
				</div>
				<div>
					<NavLink to="/clone-dominos-pizza/promotions">Акції</NavLink>
				</div>
				<div>
					<NavLink to="/clone-dominos-pizza/pizza">Піца</NavLink>
				</div>
				<div>
					<NavLink to="/clone-dominos-pizza/drinks">Напої</NavLink>
				</div>
				<div>
					<NavLink to="/clone-dominos-pizza/sides">Сайди</NavLink>
				</div>
				<div>
					<NavLink to="/clone-dominos-pizza/desserts">Десерти</NavLink>
				</div>
			</nav>
			<div>
				<Link to="/clone-dominos-pizza/cart">
					<Cart />
				</Link>
			</div>
		</header>
	);
};
export default Header;

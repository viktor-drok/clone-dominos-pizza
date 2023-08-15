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
					<NavLink to={process.env.PUBLIC_URL + "/sets"}>Набори</NavLink>
				</div>
				<div>
					<NavLink to={process.env.PUBLIC_URL + "/promotions"}>Акції</NavLink>
				</div>
				<div>
					<NavLink to={process.env.PUBLIC_URL + "/pizza"}>Піца</NavLink>
				</div>
				<div>
					<NavLink to={process.env.PUBLIC_URL + "/drinks"}>Напої</NavLink>
				</div>
				<div>
					<NavLink to={process.env.PUBLIC_URL + "/sides"}>Сайди</NavLink>
				</div>
				<div>
					<NavLink to={process.env.PUBLIC_URL + "/desserts"}>Десерти</NavLink>
				</div>
			</nav>
			<div>
				<Link to={process.env.PUBLIC_URL + "/cart"}>
					<Cart />
				</Link>
			</div>
		</header>
	);
};
export default Header;

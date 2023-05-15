import { Link, NavLink } from "react-router-dom";

import css from "./Header.module.css";
import Logo from "../Logo";
import Cart from "../Cart";

const Header = () => {
	return (
		<header className={css.header}>
			<div className={css.logo}>
				<Link to="/">
					<Logo />
				</Link>
			</div>
			<nav>
				<div>
					<NavLink to="/sets">Набори</NavLink>
				</div>
				<div>
					<NavLink to="/promotions">Акції</NavLink>
				</div>
				<div>
					<NavLink to="/pizza">Піца</NavLink>
				</div>
				<div>
					<NavLink to="/drinks">Напої</NavLink>
				</div>
				<div>
					<NavLink to="/sides">Сайди</NavLink>
				</div>
				<div>
					<NavLink to="/desserts">Десерти</NavLink>
				</div>
			</nav>
			<div>
				<Link to="/cart">
					<Cart />
				</Link>
			</div>
		</header>
	);
};
export default Header;

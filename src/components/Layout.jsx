import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import css from "./Layout.module.css";

const Layout = () => {
	return (
		<div className={css.wrapper}>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
export default Layout;

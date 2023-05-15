import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Sets from "./pages/Sets";
import Promotions from "./pages/Promotions";
import Pizza from "./pages/Pizza";
import Drinks from "./pages/Drinks";
import Sides from "./pages/Sides";
import Desserts from "./pages/Desserts";
import CartModal from "./components/CartModal/CartModal";
import PizzaSelect from "./components/PizzaSelect/PizzaSelect";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Pizza />} />
				<Route path="sets" element={<Sets />} />
				<Route path="promotions" element={<Promotions />} />
				<Route path="pizza" element={<Pizza />} />
				<Route path="pizza/:id" element={<PizzaSelect />} />
				<Route path="cart" element={<CartModal />} />
				<Route path="drinks" element={<Drinks />} />
				<Route path="sides" element={<Sides />} />
				<Route path="desserts" element={<Desserts />} />
				<Route path="*" element={<div>404</div>} />
			</Route>
		</Routes>
	);
}

export default App;

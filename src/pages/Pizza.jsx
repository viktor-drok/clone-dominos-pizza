import PizzaCard from "../components/PizzaCard";
import Sort from "../components/Sort/Sort";

const Pizza = () => {
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
				<Sort />
			</header>

			<section>
				<PizzaCard />
			</section>
		</section>
	);
};
export default Pizza;

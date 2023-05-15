import css from "./CustomButton.module.css";

const CustomButton = ({ children, type, className, onClick }) => {
	return (
		<button type={type} className={className ? className + " " + css.button : css.button} onClick={onClick}>
			{children}
		</button>
	);
};
export default CustomButton;

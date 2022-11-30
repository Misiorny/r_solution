export function Button({btnType, btnText, onClick}) {

	return (
		<button type={btnType} onClick={onClick}>
			{btnText}
		</button>
	)
}

Button.defaultProps = {
	btnType: "button", btnText: "Click Me"
}

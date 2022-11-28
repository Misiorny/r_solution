export function Button({btnType, btnText}) {
	return (
		<button type={btnType}>
			{btnText}
		</button>
	)
}

Button.defaultProps = {
	btnType: "button", btnText: "Click Me"
}

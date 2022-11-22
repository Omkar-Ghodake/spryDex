import { createContext, useState } from "react";

const FiatCurrencySymContext = createContext()

const FiatCurrencySymState = (props) => {
	const [fiatCurrencySym, setFiatCurrencySym] = useState('INR')

	console.log(fiatCurrencySym)

	return (
		<FiatCurrencySymContext.Provider value={
			{ fiatCurrencySym, setFiatCurrencySym }
		}>
			{ props.children }
		</FiatCurrencySymContext.Provider>
	)
}

export {
	FiatCurrencySymContext,
	FiatCurrencySymState
}
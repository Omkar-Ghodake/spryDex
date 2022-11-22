import { createContext, useState } from "react";

const FiatCurrencyContext = createContext()


const FiatCurrencyState = (props) => {
	const [fiatCurrency, setFiatCurrency] = useState('INR')


	return (
		<FiatCurrencyContext.Provider value={ { fiatCurrency, setFiatCurrency } }>
			{ props.children }
		</FiatCurrencyContext.Provider>
	)
}

export {
	FiatCurrencyContext,
	FiatCurrencyState
}
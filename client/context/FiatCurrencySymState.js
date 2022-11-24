import { createContext, useContext, useEffect, useState } from "react";
import { FiatCurrencyContext } from "./FiatCurrencyState";

const FiatCurrencySymContext = createContext()

const FiatCurrencySymState = (props) => {
	const { fiatCurrency } = useContext(FiatCurrencyContext)

	const [fiatCurrencySym, setFiatCurrencySym] = useState('INR')

	const changeFiatCurrencySym = () => {
		if (fiatCurrency === 'INR') {
			setFiatCurrencySym('₹')
		} else if (fiatCurrency === 'USD') {
			setFiatCurrencySym('$')
		} else if (fiatCurrency === 'EUR') {
			setFiatCurrencySym('€')
		}
	}

	useEffect(() => {
		changeFiatCurrencySym()
	}, [fiatCurrency])

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
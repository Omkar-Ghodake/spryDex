import { createContext, useContext, useEffect, useState } from "react";
import { FiatCurrencyContext } from "./FiatCurrencyState";

const FiatCurrencySymContext = createContext()

const FiatCurrencySymState = (props) => {
	const { fiatCurrency } = useContext(FiatCurrencyContext)

	const [fiatCurrencySym, setFiatCurrencySym] = useState({ sym: '₹', countryCode: 'en-IN' })

	const changeFiatCurrencySym = () => {
		if (fiatCurrency === 'INR') {
			setFiatCurrencySym({ sym: '₹', countryCode: 'en-IN' })
		} else if (fiatCurrency === 'USD') {
			setFiatCurrencySym({ sym: '$', countryCode: 'en-US' })
		} else if (fiatCurrency === 'EUR') {
			setFiatCurrencySym({ sym: '€', countryCode: 'en-EU' })
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
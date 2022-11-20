import { createContext, useState } from "react";

const CurrenciesContext = createContext()

const CurrenciesState = (props) => {
	const [currencies, setCurrencies] = useState([])

	const fetchCurrencies = async (currency, perPage, page) => {
		const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`

		const data = await fetch(api)
		const parsedData = await data.json()
		setCurrencies(parsedData)
	}

	return (
		<CurrenciesContext.Provider value={ { currencies, fetchCurrencies } }>
			{ props.children }
		</CurrenciesContext.Provider>
	)
}

export {
	CurrenciesContext,
	CurrenciesState
}
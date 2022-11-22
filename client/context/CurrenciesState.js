import { createContext, useState } from "react";
import swal from 'sweetalert'

const CurrenciesContext = createContext()

const CurrenciesState = (props) => {
	const [currencies, setCurrencies] = useState([])

	const fetchCurrencies = async (currency, perPage, page) => {
		try {
			const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`

			const data = await fetch(api)
			const parsedData = await data.json()
			if (parsedData.error) {
				throw parsedData.error
			} else {
				setCurrencies(parsedData)
			}
		} catch (error) {
			swal(error, '', 'error')
		}
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
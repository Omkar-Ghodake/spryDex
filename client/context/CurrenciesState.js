import { createContext, useState } from "react";
import swal from 'sweetalert'

const CurrenciesContext = createContext()

const CurrenciesState = (props) => {
	const { setLoadingProgress } = props

	const [currencies, setCurrencies] = useState([])

	const fetchCurrencies = async (currency, perPage, page) => {
		try {
			setLoadingProgress(20)

			const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`

			setLoadingProgress(40)

			const data = await fetch(api)

			setLoadingProgress(60)

			const parsedData = await data.json()

			setLoadingProgress(80)

			if (parsedData.error) {

			}
			// setCurrencies(parsedData.find(item => item.id === crypto))
			else {
				setCurrencies(parsedData)
			}

			setLoadingProgress(100)
		} catch (error) {
			swal({
				title: error,
				text: "An Internal Error Occured!",
				icon: "error",
				button: "OK",
			})
			setLoadingProgress(100)
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
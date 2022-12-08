import { createContext, useContext, useEffect, useState } from "react";
import swal from 'sweetalert'
import { FiatCurrencyContext } from "./FiatCurrencyState";

const CurrenciesContext = createContext()

const CurrenciesState = (props) => {
	const { setLoadingProgress } = props

	const { fiatCurrency } = useContext(FiatCurrencyContext)

	const [currencies, setCurrencies] = useState([])
	const [tableCurrencies, setTableCurrencies] = useState([])
	const [tableCount, setTableCount] = useState(20)

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

	const fetchTableCurrencies = async (currency, perPage, page) => {
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
				setTableCurrencies(parsedData)
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

	useEffect(() => {
		fetchTableCurrencies(fiatCurrency, tableCount, 1)
	}, [])

	return (
		<CurrenciesContext.Provider value={ { currencies, fetchCurrencies, tableCurrencies, fetchTableCurrencies, tableCount, setTableCount } }>
			{ props.children }
		</CurrenciesContext.Provider>
	)
}

export {
	CurrenciesContext,
	CurrenciesState
}
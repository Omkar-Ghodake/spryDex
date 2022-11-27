import { createContext, useState } from "react";
import swal from 'sweetalert'

const CryptoSlugContext = createContext()

const CryptoSlugState = (props) => {
	const { setLoadingProgress } = props

	const [cryptoObj, setCryptoObj] = useState({})

	const fetchCryptoObj = async (crypto, currency, perPage, page) => {
		try {
			setLoadingProgress(20)

			const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`

			setLoadingProgress(40)

			const data = await fetch(api)

			setLoadingProgress(60)

			const parsedData = await data.json()

			setLoadingProgress(80)

			if (parsedData.error) {
				throw parsedData.error
			} else {
				setCryptoObj(parsedData.find(item => item.id === crypto))
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
		<CryptoSlugContext.Provider value={ { cryptoObj, fetchCryptoObj } }>
			{ props.children }
		</CryptoSlugContext.Provider>
	)
}

export {
	CryptoSlugState,
	CryptoSlugContext
}
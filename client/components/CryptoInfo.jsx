import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import CryptoTable from '../layouts/CryptoTable'
import { CurrenciesContext } from '../context/CurrenciesState'
import { FiatCurrencyContext } from '../context/FiatCurrencyState'

const CryptoInfo = () => {
	const router = useRouter()

	const { currencies, fetchCurrencies } = useContext(CurrenciesContext)

	const { fiatCurrency } = useContext(FiatCurrencyContext)

	useEffect(() => {
		fetchCurrencies(fiatCurrency, 20, 1)
	}, [fiatCurrency, router.pathname])

	return (
		<>
			<div className="flex flex-col">
				<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-4 inline-block min-w-full">
						<div className="overflow-hidden">
							<table className="min-w-full cursor-pointer">
								<thead className={ `border-b bg-indigo-700` }>
									<tr>
										<th scope="col" className={ `text-base font-medium text-white text-left px-6 py-4` }>
											Rank
										</th>
										<th scope="col" className={ `text-base font-medium text-white text-left px-6 py-4` }>
											Name
										</th>
										<th scope="col" className={ `text-base font-medium text-white text-right px-6 py-4` }>
											Price
										</th>
										<th scope="col" className={ `text-base font-medium text-white text-right px-6 py-4` }>
											24h %
										</th>
										<th scope="col" className={ `text-base font-medium text-white text-right px-6 py-4` }>
											24h Market Cap %
										</th>
										<th scope="col" className={ `text-base font-medium text-white text-right px-6 py-4` }>
											Total Market Cap
										</th>
										<th scope="col" className={ `text-base font-medium text-white text-right px-6 py-4` }>
											Circulating Supply
										</th>
										<th scope="col" className={ `text-base font-medium text-white text-right px-6 py-4` }>
											Total Volume
										</th>
										<th scope="col" className={ `text-base font-medium text-white text-right px-6 py-4` }>
											ATH
										</th>
										<th scope="col" className={ `text-base font-medium text-white text-right px-6 py-4` }>
											ATL
										</th>
									</tr>
								</thead>
								<tbody>
									{ currencies && currencies.map((currency, index) => {
										return (
											<CryptoTable
												key={ index }
												id={ currency.id }
												rank={ currency.market_cap_rank }
												name={ currency.name }
												sym={ currency.symbol }
												img={ currency.image }
												price={ currency.current_price }
												change24h={ currency.price_change_percentage_24h }
												marketCap24h={ currency.market_cap_change_percentage_24h }
												totalMarketCap={ currency.market_cap }
												circulatingSupply={ currency.circulating_supply }
												totalVolume={ currency.total_volume }
												ath={ currency.ath }
												atl={ currency.atl }
											/>
										)
									}) }
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CryptoInfo
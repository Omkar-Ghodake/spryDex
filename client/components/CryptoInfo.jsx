import React, { useContext, useEffect } from 'react'
import CryptoTable from '../layouts/CryptoTable'
import { CurrenciesContext } from '../context/CurrenciesState'

const CryptoInfo = () => {
	const { currencies, fetchCurrencies } = useContext(CurrenciesContext)

	useEffect(() => {
		fetchCurrencies('INR', 20, 1)
	}, [])

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
												rank={ currency.market_cap_rank }
												name={ currency.name }
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
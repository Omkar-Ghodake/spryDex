import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import CryptoTable from '../layouts/CryptoTable'
import { CurrenciesContext } from '../context/CurrenciesState'
import { FiatCurrencyContext } from '../context/FiatCurrencyState'
import InfiniteScroll from 'react-infinite-scroll-component'
import { ImSpinner10 } from 'react-icons/im'

const CryptoInfo = () => {
	const { tableCurrencies, fetchTableCurrencies, tableCount, setTableCount } = useContext(CurrenciesContext)
	const { fiatCurrency } = useContext(FiatCurrencyContext)

	const fetchMoreCurrencies = async () => {
		fetchTableCurrencies(fiatCurrency, tableCount + 20, 1)
		setTableCount(tableCount + 20)
	}

	return (
		<>
			{
				<div className="flex flex-col">
					<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="py-4 w-full">
							<div className="overflow-hidden mx-auto flex justify-center items-center">
								<InfiniteScroll
									dataLength={ tableCurrencies.length } //This is important field to render the next data
									next={ fetchMoreCurrencies }
									hasMore={ true }
									loader={
										<h4 className='text-center my-5'>
											<ImSpinner10 className='mx-auto text-7xl animate-spin' />
										</h4>
									}
									endMessage={
										<p style={ { textAlign: 'center' } }>
											<b>Yay! You have seen it all</b>
										</p>
									}
								>
									<table className="cursor-default">
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
											</tr>
										</thead>
										<tbody>
											{ tableCurrencies && tableCurrencies.map((currency, index) => {
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
								</InfiniteScroll>
							</div>
						</div>
					</div>
				</div>
			}

		</>
	)
}

export default CryptoInfo
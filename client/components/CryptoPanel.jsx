import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import CryptoCard from '../layouts/CryptoCard'
import { CurrenciesContext } from '../context/CurrenciesState'

const CryptoPanel = () => {
	const { currencies, fetchCurrencies } = useContext(CurrenciesContext)

	useEffect(() => {
		fetchCurrencies('INR', 10, 1)
	}, [])

	return (
		<>
			<section className="text-gray-600 body-font">
				<div className="flex flex-wrap">
					{
						currencies && currencies.map((currency, index) => {
							return (
								<CryptoCard
									key={ index }
									img={ currency.image }
									name={ currency.name }
									sym={ currency.symbol }
									price={ currency.current_price }
								/>
							)
						})
					}

				</div>

				<Link href={ '/news' }>
					<button className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg my-4'>See More Crypto</button>
				</Link>
			</section>
		</>
	)
}

export default CryptoPanel
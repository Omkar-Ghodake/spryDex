import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import CryptoCard from '../layouts/CryptoCard'
import { CurrenciesContext } from '../context/CurrenciesState'
import { FiatCurrencyContext } from '../context/FiatCurrencyState'

const CryptoPanel = () => {
	const router = useRouter()

	const { currencies, fetchCurrencies } = useContext(CurrenciesContext)
	const { fiatCurrency } = useContext(FiatCurrencyContext)

	useEffect(() => {
		fetchCurrencies(fiatCurrency, 10, 1)
	}, [fiatCurrency, router.pathname])

	return (
		<>
			<section className="text-gray-600 body-font">
				<div className="flex flex-wrap">
					{
						currencies && currencies.map((currency, index) => {
							return (
								<CryptoCard
									key={ index }
									id={ currency.id }
									img={ currency.image }
									name={ currency.name }
									sym={ currency.symbol }
									price={ currency.current_price }
								/>
							)
						})
					}

				</div>

				<div className='flex justify-center items-center'>
					<Link href={ '/cryptos' }>
						<button className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg my-4'>See More Crypto</button>
					</Link>
				</div>
			</section>
		</>
	)
}

export default CryptoPanel
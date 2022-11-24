import React, { useContext } from 'react'
import Link from 'next/link'
import { FiatCurrencySymContext } from '../context/FiatCurrencySymState'

const CryptoCard = (props) => {
	const { img, name, sym, price } = props

	const { fiatCurrencySym } = useContext(FiatCurrencySymContext)

	return (
		<>
			<div className="card lg:w-1/5 md:w-1/4 sm:w-1/3 w-1/2 p-2 md:p-4 hover:img">
				<Link href={ `/cryptocurrency/${name}` }>
					<div className="border border-gray-200 p-3 md:p-6 rounded-lg h-full shadow-lg">
						<div className="flex justify-between items-center space-x-5">
							<div className=''>
								<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
									<img src={ img } alt={ name } />
								</div>
								<h2 className="md:text-xl text-gray-900 font-medium title-font">{ name }</h2>
								<span className='text-gray-400 text-lg'>{ sym.toUpperCase() }</span>
								<p className="md:text-lg leading-relaxed text-black">{ fiatCurrencySym } { price.toLocaleString('en-IN') }</p>
							</div>
							<div className=''>
							</div>
						</div>
					</div>
				</Link>
			</div>

		</>
	)
}

export default CryptoCard
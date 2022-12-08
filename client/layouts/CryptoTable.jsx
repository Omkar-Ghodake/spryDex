import React, { useContext } from 'react'
import Link from 'next/link'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { FiatCurrencySymContext } from '../context/FiatCurrencySymState'

const CryptoTable = (props) => {
	const { rank, id, name, sym, img, price, change24h, marketCap24h, totalMarketCap, circulatingSupply, totalVolume, ath, atl } = props

	const { fiatCurrencySym } = useContext(FiatCurrencySymContext)

	return (
		<>
			<tr className="bg-white border-b">
				<td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">
					#{ rank }
				</td>
				<td className="text-base text-gray-900 px-6 py-4 whitespace-nowrap flex items-center">
					<img src={ img } alt={ sym } className='w-8 mr-2' />
					<Link href={ `/cryptocurrency/${id}` } className='hover:text-indigo-500 hover:underline'>
						<span>{ name }</span>
					</Link>
				</td>
				<td className="text-base text-gray-900 px-6 py-4 whitespace-nowrap text-right">
					{ fiatCurrencySym.sym } { price.toLocaleString(fiatCurrencySym.countryCode) }
				</td>
				<td className={ `${change24h < 0 ? 'text-red-600' : 'text-green-600'} text-base text-gray-900  px-6 py-4 whitespace-nowrap text-right` }>
					<span className='flex justify-center items-center'>
						{ change24h < 0 ? <AiFillCaretDown className='flex justify-center items-center mr-1' /> : <AiFillCaretUp className='flex justify-center items-center mr-1' /> }
						{ Math.abs(change24h) }%
					</span>
				</td>
				<td className={ `${marketCap24h < 0 ? 'text-red-600' : 'text-green-600'} text-base text-gray-900  px-6 py-4 whitespace-nowrap text-right` }>
					<span className='flex justify-center items-center'>
						{ marketCap24h < 0 ? <AiFillCaretDown className='flex justify-center items-center mr-1' /> : <AiFillCaretUp className='flex justify-center items-center mr-1' /> }
						{ Math.abs(marketCap24h) }%
					</span>
				</td>
				<td className="text-base text-gray-900 px-6 py-4 whitespace-nowrap text-right">
					{ fiatCurrencySym.sym } { totalMarketCap.toLocaleString(fiatCurrencySym.countryCode) }
				</td>
				<td className="text-base text-gray-900 px-6 py-4 whitespace-nowrap text-right">
					{ fiatCurrencySym.sym } { circulatingSupply.toLocaleString(fiatCurrencySym.countryCode) }
				</td>
				<td className="text-base text-gray-900 px-6 py-4 whitespace-nowrap text-right">
					{ fiatCurrencySym.sym } { totalVolume.toLocaleString(fiatCurrencySym.countryCode) }
				</td>
			</tr>
		</>
	)
}

export default CryptoTable
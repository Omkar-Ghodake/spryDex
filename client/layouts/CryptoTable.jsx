import React from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

const CryptoTable = (props) => {
	const { rank, name, price, change24h, marketCap24h, totalMarketCap, circulatingSupply, totalVolume, ath, atl } = props

	return (
		<>
			<tr className="bg-white border-b">
				<td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">
					{ rank }
				</td>
				<td className="text-base text-gray-900 px-6 py-4 whitespace-nowrap">
					{ name }
				</td>
				<td className="text-base text-gray-900 px-6 py-4 whitespace-nowrap text-right">
					₹{ price.toLocaleString('EN-IN') }
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
					₹{ totalMarketCap.toLocaleString('EN-IN') }
				</td>
				<td className="text-base text-gray-900 px-6 py-4 whitespace-nowrap text-right">
					₹{ circulatingSupply.toLocaleString('EN-IN') }
				</td>
				<td className="text-base text-gray-900 px-6 py-4 whitespace-nowrap text-right">
					₹{ totalVolume.toLocaleString('EN-IN') }
				</td>
				<td className="text-base text-gray-900 px-6 py-4 whitespace-nowrap text-right">
					₹{ ath.toLocaleString('EN-IN') }
				</td>
				<td className="text-base text-gray-900 px-6 py-4 whitespace-nowrap text-right">
					₹{ atl.toLocaleString('EN-IN') }
				</td>
			</tr>
		</>
	)
}

export default CryptoTable
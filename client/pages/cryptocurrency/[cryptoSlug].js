import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { CryptoSlugContext } from '../../context/CryptoSlugState'
import { FiatCurrencyContext } from '../../context/FiatCurrencyState'
import { FiatCurrencySymContext } from '../../context/FiatCurrencySymState'
import { CgUnavailable } from 'react-icons/cg'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { BsChevronCompactDown } from 'react-icons/bs'

const Slug = () => {
	const router = useRouter()
	const { cryptoSlug } = router.query

	const { fiatCurrency } = useContext(FiatCurrencyContext)
	const { fiatCurrencySym } = useContext(FiatCurrencySymContext)
	const { cryptoObj, fetchCryptoObj } = useContext(CryptoSlugContext)

	const [sub2State, setSub2State] = useState(false)

	// const gochi = new Date(cryptoObj.ath_date)
	// console.log(gochi)

	const fixedNoOfDecimals = 2

	const toggleSub2 = () => {
		sub2State
			? setSub2State(false)
			: setSub2State(true)
	}

	useEffect(() => {
		if (router.isReady) {
			fetchCryptoObj(cryptoSlug, fiatCurrency, 100, 1)
		}
	}, [cryptoSlug, router.isReady])

	return (
		<>
			{ !router.isReady
				? <p>Loading</p>
				: cryptoObj &&
				<div className="bg-slate-100 duration-1000 ease-in-out">
					<div className='lg:mx-10 py-5'>
						<div className="primaryCryptoInfoPanel flex flex-col lg:flex-row items-start py-5 px-5 lg:px-8 rounded-lg mb-5">
							<div className="main flex flex-col justify-center items-start lg:mr-5 bg-white p-5 rounded-lg w-full md:w-fit lg:w-[26%] h-fit lg:h-80 mb-5">
								<div className="flex mb-5">
									{ cryptoObj.image ?
										<img src={ cryptoObj.image } alt={ cryptoObj.sym } className={ `w-14 h-14 md:w-16 md:h-16 mr-5` } />
										: <CgUnavailable className='lg:text-8xl text-slate-500' /> }

									<div className='flex flex-col justify-between'>
										<h1 className='text-3xl md:text-4xl font-medium'>{ cryptoObj.name }</h1>
										<span className='text-slate-500 font-medium text-lg md:text-xl'>Rank #{ cryptoObj.market_cap_rank }</span>
									</div>
								</div>

								<div className='flex flex-col mb-5'>
									<span className='text-slate-700 text-xl lg:text-2xl font-medium'>Price</span>
									<h2 className='text-4xl tracking-tight font-medium'>
										{ cryptoObj.current_price ? `${fiatCurrencySym.sym} ${cryptoObj.current_price.toFixed(fixedNoOfDecimals)}` : '- -' }
									</h2>
								</div>

								<div className='flex flex-col justify-start text-indigo-500'>
									<a className='font-medium hover:text-indigo-600 hover:underline duration-150' href="https://bitcoin.org">
										bitcoin.org
									</a>
									<a className='font-medium hover:text-indigo-600 hover:underline duration-150' href="">
										Source Code
									</a>
									<a className='font-medium hover:text-indigo-600 hover:underline duration-150' href="">
										White Paper
									</a>
								</div>
							</div>

							<div className="sub lg:flex bg-white p-5 pb-0 rounded-lg w-full lg:w-[74%] h-fit">
								<div className='sub1 flex lg:flex-col flex-wrap justify-between md:justify-start w-full lg:w-2/5'>
									<div className="property-group flex flex-col justify-center mb-5 w-fit md:w-1/3 lg:w-1/3">
										<div className="property flex items-center text-sm font-medium text-slate-500">
											<AiFillCaretUp className='mr-1' />
											<span>24h High</span>
										</div>
										<div className="flex items-center value lg:text-xl font-medium">
											{ cryptoObj.high_24h ? `${fiatCurrencySym.sym} ${cryptoObj.high_24h.toFixed(fixedNoOfDecimals)}` : '- -' }
										</div>
									</div>

									<div className="property-group flex flex-col justify-center mb-5 w-fit md:w-1/3 lg:w-1/3">
										<div className="property flex items-center text-sm font-medium text-slate-500">
											<AiFillCaretDown className='mr-1' />
											<span>24h Low</span>
										</div>
										<div className="flex items-center value lg:text-xl font-medium">
											{ cryptoObj.low_24h ? `${fiatCurrencySym.sym} ${cryptoObj.low_24h.toFixed(fixedNoOfDecimals)}` : '- -' }
										</div>
									</div>

									<div className="property-group flex flex-col justify-center mb-5 w-fit md:w-1/3 lg:w-1/3">
										<div className="property flex items-center text-sm font-medium text-slate-500">
											<span>24h % Change</span>
										</div>
										<div className={ `flex items-center value lg:text-xl font-medium ${cryptoObj.price_change_percentage_24h < 0 ? 'text-red-600' : 'text-green-600'}` }>
											{ cryptoObj.price_change_percentage_24h < 0 ? <AiFillCaretDown className='mr-1' /> : <AiFillCaretUp className='mr-1' /> }
											{ cryptoObj.price_change_percentage_24h ? Math.abs(cryptoObj.price_change_percentage_24h.toFixed(fixedNoOfDecimals)) : '- -' }
										</div>
									</div>

									<div className="property-group flex flex-col justify-center mb-5 w-fit md:w-1/3 lg:w-1/3">
										<div className="property flex items-center text-sm font-medium text-slate-500">
											<span>24h Price Change</span>
										</div>
										<div className={ `flex items-center value lg:text-xl font-medium ${cryptoObj.price_change_24h < 0 ? 'text-red-600' : 'text-green-600'} }` }>
											{ cryptoObj.price_change_24h < 0 ? <AiFillCaretDown className='mr-1' /> : <AiFillCaretUp className='mr-1' /> }
											{ cryptoObj.price_change_24h ? `${fiatCurrencySym.sym} ${Math.abs(cryptoObj.price_change_24h.toFixed(fixedNoOfDecimals))}` : '- -' }
										</div>
									</div>

									<div className="property-group flex flex-col justify-center mb-5 w-fit md:w-1/3 lg:w-1/3">
										<div className="property flex items-center text-sm font-medium text-slate-500">
											<span>24h Market Cap Change</span>
										</div>
										<div className={ `flex items-center value lg:text-xl font-medium ${cryptoObj.market_cap_change_percentage_24h < 0 ? 'text-red-600' : 'text-green-600'} }` }>
											{ cryptoObj.market_cap_change_percentage_24h < 0 ? <AiFillCaretDown className='mr-1' /> : <AiFillCaretUp className='mr-1' /> }
											{ cryptoObj.market_cap_change_percentage_24h ? Math.abs(cryptoObj.market_cap_change_percentage_24h.toFixed(fixedNoOfDecimals)) : '- -' }
										</div>
									</div>
								</div>

								<div className={ `sub2 ${!sub2State && 'hidden'} flex md:flex  lg:flex-col flex-wrap justify-between md:justify-start  w-full lg:w-3/5` }>
									<div className="property-group flex flex-col justify-center mb-5 w-fit md:w-1/3 lg:w-1/3">
										<div className="property flex items-center text-sm font-medium text-slate-500">
											<span>Market Cap</span>
										</div>
										<div className="flex items-center value lg:text-xl font-medium">
											{ cryptoObj.market_cap ? `${fiatCurrencySym.sym} ${cryptoObj.market_cap.toFixed(fixedNoOfDecimals)}` : '- -' }
										</div>
									</div>

									<div className="property-group flex flex-col justify-center mb-5 w-fit md:w-1/3 lg:w-1/3">
										<div className="property flex items-center text-sm font-medium text-slate-500">
											<span>Circulating Supply</span>
										</div>
										<div className="flex items-center value lg:text-xl font-medium">
											{ cryptoObj.circulating_supply ? `${fiatCurrencySym.sym} ${cryptoObj.circulating_supply.toFixed(fixedNoOfDecimals)}` : '- -' }
										</div>
									</div>

									<div className="property-group flex flex-col justify-center mb-5 w-fit md:w-1/3 lg:w-1/3">
										<div className="property flex items-center text-sm font-medium text-slate-500">
											<span>Total Supply</span>
										</div>
										<div className="flex items-center value lg:text-xl font-medium">
											{ cryptoObj.total_supply ? `${fiatCurrencySym.sym} ${cryptoObj.total_supply.toFixed(fixedNoOfDecimals)}` : '- -' }
										</div>
									</div>

									<div className="property-group flex flex-col justify-center mb-5 w-fit md:w-1/3 lg:w-1/3">
										<div className="property flex items-center text-sm font-medium text-slate-500">
											<span>Fully Diluted Valuation</span>
										</div>
										<div className="flex items-center value lg:text-xl font-medium">
											{ cryptoObj.fully_diluted_valuation ? `${fiatCurrencySym.sym} ${cryptoObj.fully_diluted_valuation.toFixed(fixedNoOfDecimals)}` : '- -' }
										</div>
									</div>

									<div className="property-group flex flex-col justify-center mb-5 w-fit md:w-1/3 lg:w-1/3">
										<div className="property flex items-center text-sm font-medium text-slate-500">
											<span>Max Supply</span>
										</div>
										<div className="flex items-center value lg:text-xl font-medium">
											{ cryptoObj.max_supply ? `${fiatCurrencySym.sym} ${cryptoObj.max_supply.toFixed(fixedNoOfDecimals)}` : '- -' }
										</div>
									</div>

									<div className="property-group flex flex-col justify-center mb-5 w-fit md:w-1/3 lg:w-1/3">
										<div className="property flex items-center text-sm font-medium text-slate-500">
											<span>All Time High(ATH)</span>
										</div>
										<div className="flex items-center value lg:text-xl font-medium">
											{ cryptoObj.ath ? `${fiatCurrencySym.sym} ${cryptoObj.ath.toFixed(fixedNoOfDecimals)}` : '- -' }
										</div>
									</div>

									<div className="property-group flex flex-col justify-center mb-5 w-fit md:w-1/3 lg:w-1/3">
										<div className="property flex items-center text-sm font-medium text-slate-500">
											<span>ATH % Change</span>
										</div>
										<div className={ `flex items-center value lg:text-xl font-medium ${cryptoObj.ath_change_percentage < 0 ? 'text-red-600' : 'text-green-600'} }` }>
											{ cryptoObj.ath_change_percentage < 0 ? <AiFillCaretDown className='mr-1' /> : <AiFillCaretUp className='mr-1' /> }
											{ cryptoObj.ath_change_percentage ? Math.abs(cryptoObj.ath_change_percentage.toFixed(fixedNoOfDecimals)) : '- -' }
										</div>
									</div>

									<div className="property-group flex flex-col justify-center mb-5 w-fit md:w-1/3 lg:w-1/3">
										<div className="property flex items-center text-sm font-medium text-slate-500">
											<span>ATH Date</span>
										</div>
										<div className="flex items-center value lg:text-xl font-medium">
											{ cryptoObj.ath_date ? cryptoObj.ath_date : '- -' }
										</div>
									</div>

									<div className="property-group flex flex-col justify-center mb-5 w-fit md:w-1/3 lg:w-1/3">
										<div className="property flex items-center text-sm font-medium text-slate-500">
											<span>All Time Low(ATL)</span>
										</div>
										<div className="flex items-center value lg:text-xl font-medium">
											{ cryptoObj.atl ? `${fiatCurrencySym.sym} ${cryptoObj.atl.toFixed(fixedNoOfDecimals)}` : '- -' }
										</div>
									</div>

									<div className="property-group flex flex-col justify-center mb-5 w-fit md:w-1/3 lg:w-1/3">
										<div className="property flex items-center text-sm font-medium text-slate-500">
											<span>ATL % Change</span>
										</div>
										<div className={ `flex items-center value lg:text-xl font-medium ${cryptoObj.atl_change_percentage < 0 ? 'text-red-600' : 'text-green-600'} }` }>
											{ cryptoObj.atl_change_percentage < 0 ? <AiFillCaretDown className='mr-1' /> : <AiFillCaretUp className='mr-1' /> }
											{ cryptoObj.atl_change_percentage ? Math.abs(cryptoObj.atl_change_percentage.toFixed(fixedNoOfDecimals)) : '- -' }
										</div>
									</div>

									<div className="property-group flex flex-col justify-center mb-5 w-fit md:w-1/3 lg:w-1/3">
										<div className="property flex items-center text-sm font-medium text-slate-500">
											<span>ATL Date</span>
										</div>
										<div className="flex items-center value lg:text-xl font-medium">
											{ cryptoObj.atl_date ? cryptoObj.atl_date : '- -' }
										</div>
									</div>
								</div>

								<div className={ `md:hidden mb-2 flex justify-center cursor-pointer hover:bg-slate-200 rounded duration-100` } onClick={ toggleSub2 }>
									<BsChevronCompactDown className={ `duration-500 ${sub2State && ' rotate-180'}` } />
								</div>
							</div>
						</div>
					</div>
				</div>
			}
		</>
	)
}

export default Slug
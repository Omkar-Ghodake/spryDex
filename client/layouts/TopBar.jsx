import React, { useContext } from 'react'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { ThemeContext } from '../context/ThemeState'
import { FiatCurrencyContext } from '../context/FiatCurrencyState'
import { AiFillCheckCircle } from 'react-icons/ai'
import { ToastOptionsContext } from '../context/ToastOptionsState'
import { MakeToastContext } from '../context/MakeToastState'
import { toast } from 'react-hot-toast'

const TopBar = () => {
	const { theme, updateTheme } = useContext(ThemeContext)
	const { setFiatCurrency } = useContext(FiatCurrencyContext)
	const { toastOptions } = useContext(ToastOptionsContext)
	const { makeToast } = useContext(MakeToastContext)

	const handleUpdateTheme = (e) => {
		e.target.checked
			? updateTheme('dark')
			: updateTheme('light')

		e.target.checked
			? makeToast('Dark Mode On')
			: makeToast('Dark Mode Off')
	}


	const changeFiatCurrency = (newFiatCurrency) => {
		setFiatCurrency(newFiatCurrency)

		theme === 'light'
			? toast(<div>Currency Changed to <b>{ newFiatCurrency }</b></div>, {
				icon: <AiFillCheckCircle className='text-2xl text-indigo-500' />
			})
			: toast(<div>Currency Changed to <b>{ newFiatCurrency }</b></div>, {
				style: {
					backgroundColor: '#000',
					color: '#fff'
				},
				icon: <AiFillCheckCircle className='text-2xl text-indigo-500' />
			})
	}

	return (
		<div className='flex justify-between px-5 py-1'>
			<div className="rates">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim quidem blanditiis obcaecati iure explicabo ipsa optio fugit, quaerat impedit delectus adipisci molestiae corrupt
			</div>
			<div className="utils flex sticky right-0">
				<div className="toggle-theme flex justify-start items-center space-x-2 mr-5">
					<span className="flex items-center md:ml-3 text-lg font-medium text-gray-900 dark:text-gray-300">
						<BsSunFill className='text-indigo-400' />
					</span>
					<label className="inline-flex relative items-center cursor-pointer">
						<input type="checkbox" value={ false } className="sr-only peer" onClick={ (e) => { handleUpdateTheme(e) } } />
						<div className="w-9 h-5 md:w-11 md:h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-indigo-400 after:content-[''] after:absolute after:top-[2px] after:left-[2px] md:after:left-[2px] after:bg-indigo-500 after:border-indigo-300 after:border after:rounded-full after:h-4 after:w-4 md:after:h-5 md:after:w-5 after:transition-all dark:border-indigo-600 peer-checked:bg-gray-500"></div>
					</label>
					<span className="flex items-center ml-3 text-lg font-medium text-gray-900 dark:text-gray-300">
						<BsMoonFill className='text-indigo-400' />
					</span>
				</div>

				<div className="m-0">
					<label htmlFor="currency" className='hidden'>Choose Currency</label>
					<select name="currency" id="currency" className='outline-none px-2 py-1 rounded-md' onChange={ (e) => { changeFiatCurrency(e.target.value) } }>
						<option value="INR" defaultValue>INR</option>
						<option value="USD">USD</option>
						<option value="EUR">EUR</option>
						{/* <option value="YEN">YEN</option> */ }
					</select>
					{/* <AiFillCaretDown /> */ }
				</div>
			</div>
		</div>
	)
}

export default TopBar
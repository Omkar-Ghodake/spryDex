import React, { useContext, useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { RiMenu4Fill } from 'react-icons/ri'
import { ThemeContext } from '../context/ThemeState'
import navStyles from '../styles/Navbar.module.css'

const Navbar = () => {
	const { theme, updateTheme } = useContext(ThemeContext)

	const router = useRouter()

	const navRef = useRef()

	const [navCollapsed, setNavCollapsed] = useState(true)

	const handleUpdateTheme = (e) => {
		e.target.isChecked && updateTheme('dark')
		!(e.target.isChecked) && updateTheme('light')
	}

	const handleNavToggle = () => {
		navCollapsed
			? setNavCollapsed(false)
			: setNavCollapsed(true)
	}

	useEffect(() => {
		const handleClickOutsideNav = (event) => {
			if (navRef.current && !navRef.current.contains(event.target)) {
				setNavCollapsed(true)
			}
		}
		document.addEventListener("mousedown", handleClickOutsideNav);

		return () => {
			document.removeEventListener("mousedown", handleClickOutsideNav);
		}
	}, [])

	return (
		<>
			<nav className={ `${navStyles.navbar} flex flex-col md:flex-row justify-between items-center px-2 py-3 md:p-5 shadow-md md:space-x-5 sticky top-0 ease-in-out duration-1000` } ref={ navRef }>
				<div className={ `${navStyles.navbarBrand}` }>
					<Image
						className={ navStyles.navbarBrandImage }
						src={ theme === 'light' ? '/spryDEX-black.png' : '/spryDEX-white.png' }
						alt='spryDex'
						fill
					/>
				</div>

				<button className='md:hidden text-indigo-500 hover:bg-gray-200 active:bg-gray-200 p-2 rounded text-2xl absolute top-5 right-2 duration-200' onClick={ handleNavToggle }><RiMenu4Fill /></button>

				<div className={ `${navStyles.collapsibleNabar} ${navCollapsed && 'hidden'} md:flex flex-col md:flex-row justify-between items-center mx-auto md:space-x-5 md:space-y-0 space-y-3 w-2/3` }>
					<ul className="nav-list flex flex-col md:flex-row justify-start md:space-x-10 space-y-3 md:space-y-0 text-lg md:text-xl mb-2 mt-5 md:mb-0 md:mt-0">
						<Link href={ '/' } className="nav-link  hover:text-indigo-800" onClick={ () => { setNavCollapsed(true) } }>
							<li className={ `list-item text-center ${router.pathname === '/' && navStyles.activeNavlink}` }>Home</li>
						</Link>
						<Link href={ '/news' } className="nav-link  hover:text-indigo-800" onClick={ () => { setNavCollapsed(true) } }>
							<li className={ `list-item text-center ${router.pathname === '/news' && navStyles.activeNavlink}` }>News</li>
						</Link>
						<Link href={ '/aboutus' } className="nav-link  hover:text-indigo-800" onClick={ () => { setNavCollapsed(true) } }>
							<li className={ `list-item text-center ${router.pathname === '/aboutus' && navStyles.activeNavlink}` }>About Us</li>
						</Link>
					</ul>

					<div className="nav-utils md:space-x-3 space-y-3 md:space-y-0 flex flex-col md:flex-row justify-between md:justify-center items-center">
						<div className="toggle-theme flex justify-start items-center space-x-2">
							<span className="flex items-center md:ml-3 text-lg font-medium text-gray-900 dark:text-gray-300">
								<BsSunFill className='text-indigo-400' />
							</span>
							<label className="inline-flex relative items-center cursor-pointer">
								<input type="checkbox" value={ false } className="sr-only peer" onClick={ handleUpdateTheme } />
								<div className="w-9 h-5 md:w-11 md:h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-indigo-400 after:content-[''] after:absolute after:top-[2px] after:left-[2px] md:after:left-[2px] after:bg-indigo-500 after:border-indigo-300 after:border after:rounded-full after:h-4 after:w-4 md:after:h-5 md:after:w-5 after:transition-all dark:border-indigo-600 peer-checked:bg-gray-500"></div>
							</label>
							<span className="flex items-center ml-3 text-lg font-medium text-gray-900 dark:text-gray-300">
								<BsMoonFill className='text-indigo-400' />
							</span>
						</div>

						<div className="m-0">
							Change Currency
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
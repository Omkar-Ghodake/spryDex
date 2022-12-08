import React, { useContext, useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { RiMenu4Fill } from 'react-icons/ri'
import navStyles from '../styles/Navbar.module.css'
import { ThemeContext } from '../context/ThemeState'
import { useSession, signOut } from 'next-auth/react'
import { BsChevronDown } from 'react-icons/bs'
import toast from 'react-hot-toast'
import { ToastOptionsContext } from '../context/ToastOptionsState'
import { SignedInContext } from '../context/SignedInState'

const Navbar = () => {

	const router = useRouter()

	const navRef = useRef()
	const accountDropdownRef = useRef()

	const { theme } = useContext(ThemeContext)
	const { toastOptions } = useContext(ToastOptionsContext)
	const { setSignedIn } = useContext(SignedInContext)

	const [navCollapsed, setNavCollapsed] = useState(true)
	const [accountDropdown, setAccountDropdown] = useState(false)

	const navToggleHandler = () => {
		navCollapsed
			? setNavCollapsed(false)
			: setNavCollapsed(true)
	}

	const toggleAccountDropdown = () => {
		accountDropdown
			? setAccountDropdown(false)
			: setAccountDropdown(true)
	}

	// google signin session
	const { data: session } = useSession()

	const googleSignoutHandler = async () => {
		const data = await signOut({ redirect: false, callbackUrl: '/' })
		toast
			.success(
				'Signed Out Successfully!',
				theme === 'light' ? toastOptions.light : toastOptions.dark
			)
		setSignedIn(false)
		router.push(data.url)
	}

	useEffect(() => {
		const handleClickOutsideElement = (e) => {
			if (navRef.current && !navRef.current.contains(e.target)) {
				setNavCollapsed(true)
			}
			if (accountDropdownRef.current && !accountDropdownRef.current.contains(e.target)) {
				setAccountDropdown(false)
			}
		}
		document.addEventListener("mousedown", handleClickOutsideElement);

		return () => {
			document.removeEventListener("mousedown", handleClickOutsideElement);
		}
	}, [])

	return (
		<>
			<nav className={ `${navStyles.navbar} flex flex-col md:flex-row justify-between items-center px-2 py-3 md:px-6 md:py-2 shadow-md md:space-x-5 sticky top-0 ease-in-out duration-1000 z-50` } ref={ navRef }>
				<div className={ `${navStyles.navbarBrand}` }>
					<Image
						className={ `${navStyles.navbarBrandImage} mx-0` }
						src={ theme === 'light' ? '/spryDEX-black.png' : '/spryDEX-white.png' }
						alt='spryDex'
						fill
					/>
				</div>

				<button className='md:hidden text-indigo-500 hover:bg-gray-200 active:bg-gray-200 p-2 rounded text-2xl absolute top-5 right-2 duration-200' onClick={ navToggleHandler }><RiMenu4Fill /></button>

				<div className={ `${navStyles.collapsibleNabar} ${navCollapsed && 'hidden'} md:flex flex-col md:flex-row justify-between items-center mx-auto md:space-x-5 md:space-y-0 space-y-3 w-2/3` }>
					<ul className="nav-list flex flex-col md:flex-row justify-start md:space-x-10 space-y-3 md:space-y-0 text-lg md:text-xl mb-2 mt-5 md:mb-0 md:mt-0">
						<Link href={ '/' } className="nav-link  hover:text-indigo-800" onClick={ () => { setNavCollapsed(true) } }>
							<li className={ `list-item text-center ${router.pathname === '/' && navStyles.activeNavlink}` }>Home</li>
						</Link>
						<Link href={ '/cryptos' } className="nav-link  hover:text-indigo-800" onClick={ () => { setNavCollapsed(true) } }>
							<li className={ `list-item text-center ${(router.pathname === '/cryptos' || router.pathname === '/cryptocurrency/[cryptoSlug]') && navStyles.activeNavlink}` }>Cryptos</li>
						</Link>
						<Link href={ '/news' } className="nav-link  hover:text-indigo-800" onClick={ () => { setNavCollapsed(true) } }>
							<li className={ `list-item text-center ${router.pathname === '/news' && navStyles.activeNavlink}` }>News</li>
						</Link>
						<Link href={ '/aboutus' } className="nav-link  hover:text-indigo-800" onClick={ () => { setNavCollapsed(true) } }>
							<li className={ `list-item text-center ${router.pathname === '/aboutus' && navStyles.activeNavlink}` }>About Us</li>
						</Link>
					</ul>

					<div className="nav-utils md:space-x-3 space-y-3 md:space-y-0 flex flex-col md:flex-row justify-between md:justify-center items-center">
						<ul className="nav-list flex flex-col md:flex-row justify-start md:space-x-10 space-y-3 md:space-y-0 text-lg md:text-xl mb-2 mt-5 md:mb-0 md:mt-0">
							{/* not signged in sessions */ }
							{ !session && <>
								<Link href={ '/signin' } className="nav-link  hover:text-indigo-800" onClick={ () => { setNavCollapsed(true) } }>
									<li className={ `list-item text-center ${router.pathname === '/signin' && navStyles.activeNavlink}` }>Sign In</li>
								</Link>
								<Link href={ '/signup' } className="nav-link  hover:text-indigo-800" onClick={ () => { setNavCollapsed(true) } }>
									<li className={ `list-item text-center ${router.pathname === '/signup' && navStyles.activeNavlink}` }>Sign Up</li>
								</Link>
							</> }

							{/* signged in sessions */ }
							{
								session && <>
									<li className={ `list-item text-center` }>
										<div className="flex items-center space-x-2 cursor-pointer hover:text-indigo-500 duration-100 ease-in" onClick={ toggleAccountDropdown }>
											<span className="text-4xl">
												<img src={ session.user.image } alt="" className='w-10 rounded-full' />
											</span>
											<span>
												{ session.user.name }
											</span>
											<span>
												<BsChevronDown />
											</span>
										</div>

										{/* Dropdown menu  */ }
										<div id="dropdown" className={ `${!accountDropdown && 'hidden'} z-10 w-fit bg-white rounded absolute mt-2 border shadow-lg` } ref={ accountDropdownRef }>
											<ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
												<li className='px-5 hover:bg-gray-100'>
													<Link href={ '/userProfile' } className="block py-2 px-4">
														Profile
													</Link>
												</li>

												<li className='px-5 hover:bg-gray-100' onClick={ googleSignoutHandler }>
													<a href="#" className="block py-2 px-4">Sign out</a>
												</li>
											</ul>
										</div>
									</li>
								</>
							}

						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
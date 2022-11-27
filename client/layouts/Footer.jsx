import React, { useContext } from 'react'
import Image from 'next/image'
import footerStyles from '../styles/Footer.module.css'
import { ThemeContext } from '../context/ThemeState'
import Link from 'next/link'

const Footer = () => {
	const { theme } = useContext(ThemeContext)

	return (
		<>
			<footer className={ `${footerStyles.footer} text-gray-600 body-font` }>
				<div className="container px-5 p-15 mx-auto">
					<div className="flex flex-wrap items-center md:text-left text-center order-first">

						<div className="lg:w-1/3 md:w-1/3 w-full px-4 mb-7 text-indigo-500 text-3xl md:text-6xl font-semibold" >
							<h2 className=''>spryDEX</h2>
						</div>

						<div className="lg:w-1/3 md:w-1/3 w-full px-4">
							<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
							<nav className="list-none mb-10">
								<li>
									<Link href={ '/' } className="text-gray-600 hover:text-gray-800">Home</Link>
								</li>
								<li>
									<Link href={ '/cryptos' } className="text-gray-600 hover:text-gray-800">Cryptos</Link>
								</li>
								<li>
									<Link href={ '/news' } className="text-gray-600 hover:text-gray-800">News</Link>
								</li>
								<li>
									<Link href={ '/aboutus' } className="text-gray-600 hover:text-gray-800">About Us</Link>
								</li>
							</nav>
						</div>

						<div className="lg:w-1/3 md:w-1/3 w-full px-4">
							<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 animate-bounce">SUBSCRIBE</h2>
							<div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-center md:justify-start">
								<div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
									<input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter Your Email' />
								</div>
								<button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded">Subscribe</button>
							</div>
							<p className="text-gray-500 text-sm my-2 md:text-left text-center animate-pulse">Subscribe to our Newsletter to get latest News about Cryptocurrency!
							</p>
						</div>
					</div>
				</div>

				<div className="bg-indigo-500">
					<div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
						<a className="flex title-font font-medium items-center md:justify-start justify-start text-gray-900">
							<div className={ `${footerStyles.footerBrand}` }>
								<Image
									className={ `${footerStyles.footerBrandImage}` }
									src={ '/spryDEX-sym-white.png' }
									alt='spryDex'
									fill
								/>
							</div>
							<span className="ml-3 text-xl text-white">spryDEX</span>
						</a>
						<p className="text-sm text-gray-100 sm:ml-6 sm:mt-0 mt-4">© 2022 spryDEX —
							<a href="https://twitter.com/omkar__ghodake" rel="noopener noreferrer" className="text-gray-300 ml-1" target="_blank">@omkarghodake</a>
						</p>
						<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
							<a className="text-gray-300">
								<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
									<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
								</svg>
							</a>
							<a className="ml-3 text-gray-300">
								<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
									<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
								</svg>
							</a>
							<a className="ml-3 text-gray-300">
								<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
									<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
									<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
								</svg>
							</a>
							<a className="ml-3 text-gray-300">
								<svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
									<path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
									<circle cx="4" cy="4" r="2" stroke="none"></circle>
								</svg>
							</a>
						</span>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
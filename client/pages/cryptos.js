import React from 'react'
import CryptoInfo from '../components/CryptoInfo'
import Head from 'next/head'

const cryptos = () => {

	return (
		<>
			<Head>
				<title>spryDex - Cryptos</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon-white.png" />
			</Head>

			<div className="container mx-auto mb-16">
				<CryptoInfo />
			</div>
		</>
	)
}

export default cryptos
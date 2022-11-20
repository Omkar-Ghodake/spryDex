import Head from 'next/head'
import CryptoPanel from '../components/CryptoPanel'
import NewsPanel from '../components/NewsPanel'
import homeStyles from '../styles/Home.module.css'

export default function Home() {

  return (
    <>
      <Head>
        <title>spryDex - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-white.png" />
      </Head>

      <div className="container mx-auto py-3">
        <CryptoPanel />
        <NewsPanel />
      </div>
    </>
  )
}

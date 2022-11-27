import { useState } from 'react'
import { CurrenciesState } from '../context/CurrenciesState'
import { FiatCurrencyState } from '../context/FiatCurrencyState'
import { FiatCurrencySymState } from '../context/FiatCurrencySymState'
import { NewsState } from '../context/NewsState'
import { ThemeState } from '../context/ThemeState'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import '../styles/globals.css'
import { Toaster } from 'react-hot-toast';
import LoadingBar from 'react-top-loading-bar'
import { CryptoSlugState } from '../context/CryptoSlugState'

function MyApp({ Component, pageProps }) {
  const [loadingProgress, setLoadingProgress] = useState(0)

  return <>
    <FiatCurrencyState>
      <FiatCurrencySymState>
        <NewsState setLoadingProgress={ setLoadingProgress }>
          <CryptoSlugState setLoadingProgress={ setLoadingProgress }>
            <CurrenciesState setLoadingProgress={ setLoadingProgress }>
              <ThemeState>
                <Toaster />
                <LoadingBar
                  progress={ loadingProgress }
                  color='#6366f1'
                  height={ 3 }
                />
                <Navbar />
                <Component { ...pageProps } />
                <div className='bg-indigo-500 h-[1px] mb-10'></div>
                <Footer />
              </ThemeState>
            </CurrenciesState>
          </CryptoSlugState>
        </NewsState>
      </FiatCurrencySymState>
    </FiatCurrencyState>
  </>
}

export default MyApp

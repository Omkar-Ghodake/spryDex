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

function MyApp({ Component, pageProps }) {
  const [loadingProgress, setLoadingProgress] = useState(0)

  return <>
    <FiatCurrencyState>
      <FiatCurrencySymState>
        <NewsState setLoadingProgress={ setLoadingProgress }>
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
              <hr className='mb-10' />
              <Footer />
            </ThemeState>
          </CurrenciesState>
        </NewsState>
      </FiatCurrencySymState>
    </FiatCurrencyState>
  </>
}

export default MyApp

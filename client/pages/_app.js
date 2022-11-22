import { CurrenciesState } from '../context/CurrenciesState'
import { FiatCurrencyState } from '../context/FiatCurrencyState'
import { FiatCurrencySymState } from '../context/FiatCurrencySymState'
import { NewsState } from '../context/NewsState'
import { ThemeState } from '../context/ThemeState'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <FiatCurrencySymState>
      <FiatCurrencyState>
        <NewsState>
          <CurrenciesState>
            <ThemeState>
              <Navbar />
              <Component { ...pageProps } />
              <Footer />
            </ThemeState>
          </CurrenciesState>
        </NewsState>
      </FiatCurrencyState>
    </FiatCurrencySymState>
  </>
}

export default MyApp

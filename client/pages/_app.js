import { CurrenciesState } from '../context/CurrenciesState'
import { NewsState } from '../context/NewsState'
import { ThemeState } from '../context/ThemeState'
import Navbar from '../layouts/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <NewsState>
      <CurrenciesState>
        <ThemeState>
          <Navbar />
          <Component { ...pageProps } />
        </ThemeState>
      </CurrenciesState>
    </NewsState>
  </>
}

export default MyApp

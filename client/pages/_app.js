import { useState } from 'react'
import '../styles/globals.css'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import LoadingBar from 'react-top-loading-bar'
import TopBar from '../layouts/TopBar'
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react'
import { CurrenciesState } from '../context/CurrenciesState'
import { FiatCurrencyState } from '../context/FiatCurrencyState'
import { FiatCurrencySymState } from '../context/FiatCurrencySymState'
import { NewsState } from '../context/NewsState'
import { ThemeState } from '../context/ThemeState'
import { CryptoSlugState } from '../context/CryptoSlugState'
import { UserInfoState } from '../context/UserInfoState'
import { ToastOptionsState } from '../context/ToastOptionsState'
import { MakeToastState } from '../context/MakeToastState'
import { SignedInState } from '../context/SignedInState'

function MyApp({
  Component, pageProps: { session, ...pageProps },
}) {
  const [loadingProgress, setLoadingProgress] = useState(0)

  return <>
    <SessionProvider session={ session }>

      <SignedInState>
        <ThemeState>
          <ToastOptionsState>
            <MakeToastState>
              <UserInfoState>
                <FiatCurrencyState>
                  <FiatCurrencySymState>
                    <NewsState setLoadingProgress={ setLoadingProgress }>
                      <CryptoSlugState setLoadingProgress={ setLoadingProgress }>
                        <CurrenciesState setLoadingProgress={ setLoadingProgress }>
                          <Toaster />
                          <LoadingBar
                            progress={ loadingProgress }
                            color='#6366f1'
                            height={ 3 }
                          />
                          <TopBar />
                          <Navbar />
                          <Component { ...pageProps } />
                          <div className='bg-gray-300 h-[1px] mb-10'></div>
                          <Footer />
                        </CurrenciesState>
                      </CryptoSlugState>
                    </NewsState>
                  </FiatCurrencySymState>
                </FiatCurrencyState>
              </UserInfoState>
            </MakeToastState>
          </ToastOptionsState>
        </ThemeState>
      </SignedInState>

    </SessionProvider>
  </>
}

export default MyApp

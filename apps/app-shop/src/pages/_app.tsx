import Router from 'next/router'
import nprogress from 'nprogress'
import debounce from 'lodash.debounce'

import GlobalStyles from '../styles/GlobalStyles'

import { AppContextProvider } from '../context/appContext/index'

const start = debounce(nprogress.start, 500)

Router.events.on('routeChangeStart', start)

Router.events.on('routeChangeComplete', () => {
  start.cancel()
  nprogress.done()
  window.scrollTo(0, 0)
})

Router.events.on('routeChangeError', () => {
  start.cancel()
  nprogress.done()
})

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </AppContextProvider>
  )
}

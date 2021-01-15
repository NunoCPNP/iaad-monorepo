import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import { useAppState } from '../context/appContext'

import { dark } from '../styles/themes/dark'
import { light } from '../styles/themes/light'

import SEO from '../components/seo'
import Header from '../components/Header'
import HeaderSlot from '../components/HeaderSlot'

import { initializeApollo } from '../../lib/apolloClient'
import { GET_NAVBAR_ITEMS } from '../../graphql/queries'

const App = () => {
  const { darkMode } = useAppState()

  return (
    <>
      <SEO title="" description="" />
      <ThemeProvider theme={darkMode ? dark : light}>
        <HeaderSlot />
        <Header />
        <Main>
          <section id="Home">
            <h1>Hello World !</h1>
          </section>
        </Main>
      </ThemeProvider>
    </>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: GET_NAVBAR_ITEMS,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  }
}

export default App

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.primary};
  transition: 0.3s ease background-color;
  overflow: hidden;
`

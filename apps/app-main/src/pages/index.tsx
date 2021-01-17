import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'
import { ThemeProvider } from '@emotion/react'
import { useAppState } from '../context/appContext'

import { dark } from '../styles/themes/dark'
import { light } from '../styles/themes/light'

import SEO from '../components/seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeaderSlot from '../components/HeaderSlot'

import { data } from '../../data'

type Props = {
  navbar: any
}

const App: React.FC<Props> = ({ navbar }) => {
  const { darkMode } = useAppState()
  const { t } = useTranslation()

  return (
    <>
      <SEO title="" description="" />
      <ThemeProvider theme={darkMode ? dark : light}>
        <HeaderSlot />
        <Header navbar={navbar} />
        <Main>
          <section id="Home">
            <h1>{t('common:greeting')}</h1>
          </section>
        </Main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export async function getStaticProps() {
  const dataResponse = data()

  return {
    props: {
      navbar: dataResponse.navbar,
    },
  }
}

export default App

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  transition: 0.3s ease background-color;
  overflow: hidden;
`

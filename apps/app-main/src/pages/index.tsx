import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import { useAppState } from '../context/appContext'

import { dark } from '../styles/themes/dark'
import { light } from '../styles/themes/light'

import SEO from '../components/seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeaderSlot from '../components/HeaderSlot'
import LanguageSelector from '../components/LanguageSelector'

const App: React.FC = () => {
  const { darkMode, languageSwitch } = useAppState()

  return (
    <>
      <SEO title="" description="" />
      <ThemeProvider theme={darkMode ? dark : light}>
        <HeaderSlot />
        <Header />
        <Main>
          <section id="home"></section>
        </Main>
        <Footer />
        {languageSwitch && <LanguageSelector />}
      </ThemeProvider>
    </>
  )
}

export default App

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  transition: 0.3s ease background-color;
  overflow: hidden;
`

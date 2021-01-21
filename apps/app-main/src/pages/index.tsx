import styled from '@emotion/styled'
import { useAppState } from '../context/appContext'

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
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <HeaderSlot />
        <Header />
        <Main>
          <section id="home">Hey You !</section>
        </Main>
        <Footer />
        {languageSwitch && <LanguageSelector />}
      </div>
    </>
  )
}

export default App

const Main = styled.main`
  background-color: var(--mainBackground);
  color: var(--mainColor);
  transition: 0.3s ease background-color;
  overflow: hidden;
`

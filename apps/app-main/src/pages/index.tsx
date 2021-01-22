import styled from '@emotion/styled'
import { useAppState } from '../context/appContext'

import SEO from '../components/seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GDPR from '../components/gdpr'
import HeaderSlot from '../components/HeaderSlot'
import LanguageSelector from '../components/LanguageSelector'

const App: React.FC = () => {
  const { darkMode, languageSwitch, gdprModal } = useAppState()

  return (
    <>
      <SEO title="IAAD" description="" />
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <HeaderSlot />
        <Header />
        <Main>
          <section id="home">Hey You !</section>
        </Main>
        <Footer />
        {languageSwitch && <LanguageSelector />}
        {gdprModal && <GDPR />}
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

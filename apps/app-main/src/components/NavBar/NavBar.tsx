import Link from 'next/link'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'

import BurgerIcon from '../BurgerIcon'

import { Logo, Wrapper, Container, Items } from './NavBar.styles'
import { animContainer, animItem } from './NavBar.animations'

const navbaritems = [
  {
    label: 'home',
    link: '/',
    type: 'standard',
  },
  {
    label: 'who',
    link: '/#who',
    type: 'standard',
  },
  {
    label: 'services',
    link: '/#services',
    type: 'standard',
  },
  {
    label: 'contacts',
    link: '/#contacts',
    type: 'standard',
  },
  {
    label: 'ctc',
    link: '/#ctc',
    type: 'standard',
  },
]

const NavBar: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Wrapper data-testid="navbar">
      <Container>
        <div>
          <Logo>
            <Image src="/iaad_logo.png" width={200} height={50} layout="fixed" />
          </Logo>
        </div>
        <Items>
          <motion.ul variants={animContainer} initial="hidden" animate={'visible'}>
            {navbaritems.map((link, index) => (
              <motion.li key={index} variants={animItem}>
                <Link href={link.link}>
                  <a>{t(`common:navbar.${link.label}`)}</a>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </Items>
        <BurgerIcon />
      </Container>
    </Wrapper>
  )
}

export default NavBar

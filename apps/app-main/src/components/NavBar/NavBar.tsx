import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'

import BurgerIcon from '../BurgerIcon'

import { Logo, Wrapper, Container, Items } from './NavBar.styles'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

type Props = {
  navbar: any
}

const NavBar: React.FC<Props> = ({ navbar }) => {
  const { t } = useTranslation()

  return (
    <Wrapper data-testid="navbar">
      <Container>
        <div>
          <Logo></Logo>
        </div>
        <Items>
          <motion.ul variants={container} initial="hidden" animate={'visible'}>
            {navbar &&
              navbar.map((link) => (
                <motion.li key={link.id} variants={item}>
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

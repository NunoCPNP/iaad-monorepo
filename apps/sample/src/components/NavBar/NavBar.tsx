import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { motion } from 'framer-motion'

import { GET_NAVBAR_ITEMS } from '../../../graphql/queries'

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

const NavBar: React.FC = () => {
  const { loading, error, data } = useQuery(GET_NAVBAR_ITEMS)

  if (error) return <div>Error</div>
  if (loading) return <div>Loading</div>

  return (
    <Wrapper data-testid="navbar">
      <Container>
        <div className="navbar-logo">
          <Logo>{/* <img src="/logo192.png" alt="Website logo" /> */}</Logo>
        </div>
        <Items>
          <motion.ul variants={container} initial="hidden" animate={'visible'}>
            {data.navbar.map((link) => (
              <motion.li key={link.id} variants={item}>
                <Link href={link.link}>
                  <a>{link.label}</a>
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

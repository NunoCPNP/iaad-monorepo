import { Container } from './Header.styles'

import NavBar from '../NavBar/NavBar'

type Props = {
  navbar: any
}

const Header: React.FC<Props> = ({ navbar }) => (
  <Container data-testid="header">
    <NavBar navbar={navbar} />
  </Container>
)

export default Header

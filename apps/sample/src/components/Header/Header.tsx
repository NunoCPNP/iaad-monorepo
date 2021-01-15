import { Container } from './Header.styles'

import NavBar from '../NavBar/NavBar'

const Header: React.FC = () => (
  <Container data-testid="header">
    <NavBar />
  </Container>
)

export default Header

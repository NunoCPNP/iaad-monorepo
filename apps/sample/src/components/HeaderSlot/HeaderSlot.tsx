import { Container, Bold, Separator } from './HeaderSlot.styles'

const HeaderSlot: React.FC = () => (
  <Container data-testid="headerslot">
    <Bold>Stay Safe, Stay Home</Bold>
    <Separator>|</Separator>
    <span>Covid 19</span>
  </Container>
)

export default HeaderSlot

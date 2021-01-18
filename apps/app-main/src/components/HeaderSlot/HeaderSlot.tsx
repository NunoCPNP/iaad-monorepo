import useTranslation from 'next-translate/useTranslation'

import { Container, Bold, Separator } from './HeaderSlot.styles'

const HeaderSlot: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Container data-testid="headerslot">
      <Bold>{t('common:headerslot.1')}</Bold>
      <Separator>|</Separator>
      <span>{t('common:headerslot.2')}</span>
    </Container>
  )
}

export default HeaderSlot

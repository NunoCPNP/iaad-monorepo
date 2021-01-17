import useTranslation from 'next-translate/useTranslation'

import LanguageSelector from '../LanguageSelector'

import { Container, Wrapper, Slot, Bold, Separator } from './HeaderSlot.styles'

const HeaderSlot: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Container data-testid="headerslot">
      <div>
        <div></div>
        <Slot>
          <Bold>{t('common:headerslot.1')}</Bold>
          <Separator>|</Separator>
          <span>{t('common:headerslot.2')}</span>
        </Slot>
        <Wrapper>
          <LanguageSelector />
        </Wrapper>
      </div>
    </Container>
  )
}

export default HeaderSlot

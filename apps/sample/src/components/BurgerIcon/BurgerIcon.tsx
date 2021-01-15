import { useState } from 'react'

import { Icon } from './BurgerIcon.styles'

const BurgerIcon: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <Icon data-testid="burgericon" className={toggle ? 'open' : ''} onClick={() => setToggle(!toggle)}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Icon>
  )
}

export default BurgerIcon

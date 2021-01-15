import { render, cleanup } from '../../../utils/tests'

import BurgerIcon from '../BurgerIcon'

afterEach(cleanup)

describe('<BurgerIcon /> spec', () => {
  it('Should run without errors', () => {
    const { queryAllByTestId } = render(<BurgerIcon />)

    const navbar = queryAllByTestId(/burgericon/i)
    expect(navbar).toHaveLength(1)
  })

  it('Should match snapshot', () => {
    const { asFragment } = render(<BurgerIcon />)

    expect(asFragment(<BurgerIcon />)).toMatchSnapshot()
  })
})

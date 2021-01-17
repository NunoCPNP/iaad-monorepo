import { render, cleanup } from '../../../utils/tests'

import NavBar from '../NavBar'

afterEach(cleanup)

describe('<NavBar /> spec', () => {
  it('Should run without errors', () => {
    const { queryAllByTestId } = render(<NavBar />)

    const navbar = queryAllByTestId(/navbar/i)
    expect(navbar).toHaveLength(1)
  })

  it('Should render BurgerIcon Component', () => {
    const { queryAllByTestId } = render(<NavBar />)

    const navbar = queryAllByTestId(/burgericon/i)
    expect(navbar).toHaveLength(1)
  })

  it('Should match snapshot', () => {
    const { asFragment } = render(<NavBar />)

    expect(asFragment(<NavBar />)).toMatchSnapshot()
  })
})

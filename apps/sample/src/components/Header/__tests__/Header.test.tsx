import { render, cleanup } from '../../../utils/tests'

import Header from '../Header'

afterEach(cleanup)

describe('<Header /> spec', () => {
  it('Should run without errors', () => {
    const { queryAllByTestId } = render(<Header />)

    const header = queryAllByTestId(/header/i)
    expect(header).toHaveLength(1)
  })

  it('Should render children navbar component', async () => {
    const { queryAllByTestId } = render(<Header />)

    await new Promise((resolve) => setTimeout(resolve, 0))

    const navbar = queryAllByTestId(/navbar/i)
    await expect(navbar).toHaveLength(1)
  })

  it('Should match snapshot', async () => {
    const { asFragment } = render(<Header />)

    await new Promise((resolve) => setTimeout(resolve, 0))

    const link = await asFragment(<Header />)
    await expect(link).toMatchSnapshot()
  })
})

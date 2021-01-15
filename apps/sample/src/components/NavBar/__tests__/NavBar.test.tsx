import { render, cleanup } from '../../../utils/tests'

import NavBar from '../NavBar'

afterEach(cleanup)

describe('<NavBar /> spec', () => {
  it('Should run without errors', async () => {
    const { findByText, getByText } = render(<NavBar />)

    expect(getByText('Loading')).toBeInTheDocument()

    const link = await findByText('Home')
    expect(link).toBeInTheDocument()
  })

  it('Should match snapshot', async () => {
    const { asFragment, getByText } = render(<NavBar />)

    expect(getByText('Loading')).toBeInTheDocument()

    await new Promise((resolve) => setTimeout(resolve, 0))

    const link = await asFragment(<NavBar />)
    await expect(link).toMatchSnapshot()
  })
})

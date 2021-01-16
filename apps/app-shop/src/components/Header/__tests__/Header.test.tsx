import { render, cleanup } from '../../../utils/tests'

import Header from '../Header'

afterEach(cleanup)

describe('<Header /> spec', () => {
  it('Should run without errors', () => {
    const { queryAllByTestId } = render(<Header />)

    const header = queryAllByTestId(/header/i)
    expect(header).toHaveLength(1)
  })

  it('Should match snapshot', () => {
    const { asFragment } = render(<Header />)

    expect(asFragment(<Header />)).toMatchSnapshot()
  })
})

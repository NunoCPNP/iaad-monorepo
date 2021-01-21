import { render, cleanup } from '../../../utils/tests'

import GDPR from '../GDPR'

afterEach(cleanup)

describe('<GDPR /> spec', () => {
  it('Should run without errors', () => {
    const { queryAllByTestId } = render(<GDPR />)

    const gdpr = queryAllByTestId(/gdpr/i)
    expect(gdpr).toHaveLength(1)
  })

  it('Should match snapshot', () => {
    const { asFragment } = render(<GDPR />)

    expect(asFragment(<GDPR />)).toMatchSnapshot()
  })
})

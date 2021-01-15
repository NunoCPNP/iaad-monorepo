import { render, cleanup } from '../../../utils/tests'

import HeaderSlot from '../HeaderSlot'

afterEach(cleanup)

describe('<HeaderSlot /> spec', () => {
  it('Should run without errors', () => {
    const { queryAllByTestId } = render(<HeaderSlot />)

    const headerslot = queryAllByTestId(/headerslot/i)
    expect(headerslot).toHaveLength(1)
  })

  it('Should match snapshot', () => {
    const { asFragment } = render(<HeaderSlot />)

    expect(asFragment(<HeaderSlot />)).toMatchSnapshot()
  })
})

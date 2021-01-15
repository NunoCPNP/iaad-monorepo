import { render, cleanup } from '../../../utils/tests'

import HeaderSlot from '../HeaderSlot'

afterEach(cleanup)

describe('<HeaderSlot /> spec', () => {
  it('Should run without errors', () => {
    const { queryAllByTestId } = render(<HeaderSlot />)

    const header = queryAllByTestId(/headerslot/i)
    expect(header).toHaveLength(1)
  })

  it('Should match snapshot', () => {
    const { asFragment } = render(<HeaderSlot />)

    expect(asFragment(<HeaderSlot />)).toMatchSnapshot()
  })
})

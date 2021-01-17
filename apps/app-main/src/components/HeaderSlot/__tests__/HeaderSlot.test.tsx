import { render, screen, cleanup } from '../../../utils/tests'

import HeaderSlot from '../HeaderSlot'

afterEach(cleanup)

describe('<HeaderSlot /> spec', () => {
  it('Should run without errors', () => {
    const { queryAllByTestId } = render(<HeaderSlot />)

    const headerslot = queryAllByTestId(/headerslot/i)
    expect(headerslot).toHaveLength(1)
  })

  it('Should recieve translation strings', () => {
    const { getByText } = render(<HeaderSlot />)

    expect(screen.getByText('common:headerslot.1')).toBeTruthy()
    expect(screen.getByText('common:headerslot.2')).toBeTruthy()
  })

  it('Should render LanguageSelector component', () => {
    const { queryAllByTestId } = render(<HeaderSlot />)

    const headerslot = queryAllByTestId(/languageselector/i)
    expect(headerslot).toHaveLength(1)
  })

  it('Should match snapshot', () => {
    const { asFragment } = render(<HeaderSlot />)

    expect(asFragment(<HeaderSlot />)).toMatchSnapshot()
  })
})

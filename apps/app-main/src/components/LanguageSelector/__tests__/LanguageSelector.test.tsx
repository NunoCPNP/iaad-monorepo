import { render, cleanup } from '../../../utils/tests'

import LanguageSelector from '../LanguageSelector'

afterEach(cleanup)

describe('<LanguageSelector /> spec', () => {
  it('Should run without errors', () => {
    const { queryAllByTestId } = render(<LanguageSelector />)

    const languageselector = queryAllByTestId(/languageselector/i)
    expect(languageselector).toHaveLength(1)
  })

  it('Should match snapshot', () => {
    const { asFragment } = render(<LanguageSelector />)

    expect(asFragment(<LanguageSelector />)).toMatchSnapshot()
  })
})

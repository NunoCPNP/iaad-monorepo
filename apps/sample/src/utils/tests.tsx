import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { ThemeProvider } from '@emotion/react'

import { GET_NAVBAR_ITEMS } from '../../graphql/queries'

import { dark } from '../styles/themes/dark'

const mocks = [
  {
    request: {
      query: GET_NAVBAR_ITEMS,
    },
    result: {
      data: {
        navbar: [
          {
            id: 'e8f21e36-a1ee-466e-aec9-95ea0de4af70',
            label: 'Home',
            link: '/',
            type: 'standard',
          },
        ],
      },
    },
  },
]

const AllTheProviders = ({ children }) => {
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      <ThemeProvider theme={dark}>{children}</ThemeProvider>
    </MockedProvider>
  )
}

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }

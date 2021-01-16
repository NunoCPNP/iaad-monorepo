import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'

import { dark } from '../styles/themes/dark'

const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={dark}>{children}</ThemeProvider>
}

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }

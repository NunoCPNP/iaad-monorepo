import { gql } from '@apollo/client'

export const GET_NAVBAR_ITEMS = gql`
  query getNavBarItems {
    navbar {
      id
      label
      link
      type
    }
  }
`

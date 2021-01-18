import styled from '@emotion/styled'

export const Wrapper = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.accent};
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.3);
  transition: 0.3s ease background-color;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 140rem;
  height: 6rem;
  margin: 0 auto;

  @media only screen and (max-width: 1400px) {
    padding: 0 1rem;
  }
`

export const Items = styled.div`
  ul {
    display: flex;
  }

  li a {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    margin-left: 1.5rem;
    font-size: 1.3rem;
    font-weight: 700;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
    transition: 0.2s ease-out color;

    :hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const Logo = styled.div`
  width: 4rem;
`

import styled from '@emotion/styled'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
`

export const Bold = styled.span`
  font-weight: 700;
`

export const Separator = styled.div`
  padding: 0 0.7rem 0 0.7rem;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

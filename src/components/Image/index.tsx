import styled from 'styled-components'

export default styled.img<{
  shadowColor?: string
}>`
  object-fit: contain;
  ${({ shadowColor }) =>
    shadowColor ? `filter: drop-shadow(0 0 50px ${shadowColor});` : ''}
`

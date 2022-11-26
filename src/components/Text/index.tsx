import styled from 'styled-components'

export const Text = styled.p<{
  size?: 'small' | 'medium' | 'large'
  weight?: 'light' | 'normal' | 'bold' | 'extra-bold'
  color?: string
}>`
  font-size: ${({ size }) => {
    switch (size) {
      case 'small':
        return '1.5rem'

      case 'medium':
        return '2rem'

      case 'large':
        return '2.5rem'

      default:
        return '1.5rem'
    }
  }};
  font-weight: ${({ weight }) => {
    switch (weight) {
      case 'light':
        return '300'
      case 'normal':
        return '400'
      case 'bold':
        return '700'
      case 'extra-bold':
        return '900'
      default:
        return '400'
    }
  }};
  ${({ color }) => (color ? `color: ${color};` : '')}
`

export const H1 = styled(Text)`
  font-size: 5.5rem;
  font-weight: 700;
  line-height: 1.2;
`
export const H2 = styled(Text)`
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.2;
`

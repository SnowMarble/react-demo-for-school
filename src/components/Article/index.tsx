import styled from 'styled-components'
import { Flex } from '@/components'

export default styled(Flex)<{
  height?: string
}>`
  width: 100vw;
  padding: 0 140px;
  height: ${({ height }) => height || '100vh'};
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

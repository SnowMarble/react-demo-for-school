import styled from 'styled-components'

export default styled.div<
  Partial<Record<'grow' | 'basis' | 'order' | 'shrink', number>> & {
    gap?: string
    direction?: 'row' | 'column'
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
    align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
    justify?:
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'space-between'
      | 'space-around'
  }
>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  align-items: ${(props) => props.align || 'stretch'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  flex-grow: ${(props) => props.grow};
  flex-basis: ${(props) => props.basis};
  flex-shrink: ${(props) => props.shrink || 1};
  order: ${(props) => props.order || 0};
  gap: ${(props) => props.gap || 0};
`

import styled from 'styled-components'

const BOX_SHADOW_OPACITY = 50
const hexOpacity = BOX_SHADOW_OPACITY.toString(16)

const boxShadowColorCalc = (color: string): string => {
  // when color is provied as #rrggbb
  if (color.length === 7) {
    return color + hexOpacity
  }

  // when color is provied as #rgb
  if (color.length === 4) {
    return `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}${hexOpacity}`
  }

  // when color is provied as rgb(r, g, b, ?a)
  if (color.match(/^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/)) {
    const rgba: string[] = color.match(/\d+/g) as string[]
    return `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${
      rgba[3] || 1 / BOX_SHADOW_OPACITY / 100
    })`
  }

  return color
}

export default styled.button<
  Partial<Record<'backgroundColor' | 'color', string>>
>`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: ${({ backgroundColor }) => backgroundColor || '#000'};
  color: ${({ color }) => color || '#fff'};
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0 15px 3px
    ${({ backgroundColor: c }) => c && boxShadowColorCalc(c)};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`

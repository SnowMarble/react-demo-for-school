import { Header, Article, Flex, Image, Text, H1 } from '@/components'
import styled from 'styled-components'
import style from './style.module.css'

const Highlight = styled.span`
  color: #3eca8e;
  font-weight: 500;
`

const Description = styled(Text)`
  font-size: 1.8rem;
  font-weight: 400;
  color: #7b7f84;
  margin-top: 10px;
`

export default function App() {
  return (
    <>
      <Header />
      <Article>
        <Flex direction="column" className={style.title}>
          <Text size="small" weight="bold">
            <Highlight>Available from 12/1/22</Highlight>
          </Text>
          <H1>
            New <Highlight>perspective</Highlight>,
          </H1>
          <H1>
            New <Highlight>style</Highlight> for
          </H1>
          <H1>Smart watch.</H1>
          <Description>
            New approach to design and technology <br />
            More simple, minimalistic and powerful.
          </Description>
        </Flex>
        <Image
          src="/watch.png"
          shadowColor="rgba(20, 49, 39, 0.7)"
          className={style.image}
        />
      </Article>
      <Article></Article>
    </>
  )
}

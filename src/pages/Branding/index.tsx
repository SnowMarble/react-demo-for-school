import { Header, Article, H1, H2, Card, Text } from '@/components'
import styled from 'styled-components'

export default function Branding() {
  return (
    <>
      <Header />
      <Article gap="100px">
        <Card style={{ flex: 4 }}>
          <H2 style={{ margin: '10px 0' }}>
            We mainly consider these three things.
          </H2>
          <Text style={{ color: '#7b7f84' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Card>
        <H1 style={{ flex: 5 }}>
          to Everyon 🤼‍♂️
          <br />
          in Everywhere 🚤
          <br />
          for Everything 🔦
        </H1>
      </Article>
    </>
  )
}

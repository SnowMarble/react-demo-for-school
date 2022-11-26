import { Header, Flex, Card, H1, H2, Text, Image, Button } from '@/components'

function Block({ title, description, image, color }: { [k: string]: string }) {
  return (
    <Flex gap="40px" style={{ width: '100%', height: '50vh' }}>
      <Card style={{ flex: 1 }}>
        <Flex
          direction="column"
          gap="15px"
          justify="space-between"
          style={{ height: '100%' }}
        >
          <H2>{title}</H2>
          <Text style={{ color: '#7b7f84' }}>{description}</Text>
          <Button backgroundColor={color}>Learn more</Button>
        </Flex>
      </Card>
      <Image
        src={image}
        style={{ flex: 3, objectFit: 'cover', borderRadius: '20px' }}
      />
    </Flex>
  )
}

export default function Applications() {
  return (
    <>
      <Header />
      <Flex direction="column" gap="40px" style={{ padding: '86px 140px' }}>
        <H2>🪴 Where I stay..</H2>
        <Block
          title="Countryside"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
          image="/2.jpg"
          color="#3ccf92"
        />
        <Block
          title="Home"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
          image="/3.jpg"
          color="#fe9452"
        />
        <Block
          title="Place"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
          image="/1.jpg"
          color="#3c5bd0"
        />
      </Flex>
    </>
  )
}

import { Header, H2, Flex } from '@/components'

export default function Error() {
  return (
    <>
      <Header />
      <Flex align="center" justify="center" style={{ height: '100vh' }}>
        <H2>Opps! Page not found! 🧶</H2>
      </Flex>
    </>
  )
}

import { Link } from 'react-router-dom'
import { Flex, Button, Text } from '@/components'
import styled from 'styled-components'

const NavLink = styled(Link)`
  color: #7b7f84;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.3rem;
`

export default function Header() {
  return (
    <Flex
      style={{
        position: 'fixed',
        padding: '25px 50px',
        width: '100%',
        backgroundColor: '#12131c',
        zIndex: 1,
      }}
    >
      <Flex direction="row" gap="20px" align="center">
        <Link to={`/`}>
          <Text weight="extra-bold" color="#fff">
            Doran
          </Text>
        </Link>
        <NavLink to={`/website`}>website</NavLink>
        <NavLink to={`/applications`}>application</NavLink>
        <NavLink to={`/branding`}>branding</NavLink>
      </Flex>
      <Button
        backgroundColor="#3ece92"
        style={{
          alignSelf: 'flex-end',
          marginLeft: 'auto',
        }}
      >
        Let's start
      </Button>
    </Flex>
  )
}

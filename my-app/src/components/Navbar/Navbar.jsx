import { Flex, Heading, Image, View } from '@adobe/react-spectrum'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <View>
    <Flex direction="row" justifyContent="space-between" alignItems="center" >
        <Link to="/" style={{textDecoration:"none"}}>
          <Heading UNSAFE_style={{fontSize:"24px",color:"black"}} >hava havai</Heading>
        </Link>
        <Image src="https://res.cloudinary.com/db0f83m76/image/upload/v1720137065/Avatar_-_Desktop_-_Light_ass2bv.png" alt="profile" />
      </Flex>
      </View>
  )
}

export default Navbar
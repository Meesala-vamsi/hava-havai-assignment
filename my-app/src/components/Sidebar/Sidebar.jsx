import { Flex, Heading, Text, View } from '@adobe/react-spectrum'
import React from 'react'
import Home from "@spectrum-icons/workflow/Home"
import Apps from "@spectrum-icons/workflow/Apps"


const Sidebar = () => {
  return (
    <Flex direction="column" gap="size-200">
      <View>
        <View padding="size-100">
          <Flex direction="row" alignItems="center" gap="size-100">
            <Home size="S" />
            <Text marginTop="size-25">Home</Text>
          </Flex>
        </View>
        <View padding="size-100">
          <Flex direction="row" alignItems="center" gap="size-100">
            <Apps size="S" />
            <Text marginTop="size-25">Dashboard</Text>
          </Flex>
        </View>
      </View>
      <View padding="size-100">
      <Flex direction="column" gap="size-100">
        <Text>Services</Text>
        <View backgroundColor="gray-200" padding="size-100" borderRadius="regular">
          <Text>Airports</Text>
        </View>
        <Text>Videos</Text>
      </Flex>
    </View>
      
      <View padding="size-100">
        <Flex direction="column">
        <Heading>Others</Heading>
        <Text>List 1</Text>
        <Text>List 2</Text>
        <Text>List 3</Text>
        </Flex>
      </View>
    </Flex>
  )
}

export default Sidebar
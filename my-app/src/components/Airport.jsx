import { Button, Flex, Heading, Text, View } from '@adobe/react-spectrum'
import React, { useState } from 'react'
import airportData from '../MockDb/Mockdb'
import AirportList from './AirportList'

const Airport = () => {
const [getAirportData,setAirportData] = useState(airportData)

const handleUpdate = (updatedItem) => {
  setAirportData(prevData =>
    prevData.map(item =>
      item.id === updatedItem.id ? updatedItem : item
    )
  );
};

const handleDelete = (id) => {
  setAirportData(prevData =>
    prevData.filter(item => item.id !== id)
  );
};


  return (
    <View padding="size-200">
      <Flex justifyContent="space-between" alignItems="center">
      <Heading>Airports</Heading>
      <Button variant="primary" style="fill">
        <Text>+ Add new</Text>
      </Button>
      </Flex>
      <AirportList data={getAirportData} onUpdate={handleUpdate} onDelete={handleDelete}/>
    </View>
  )
}

export default Airport
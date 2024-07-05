import { ActionButton, Breadcrumbs, Button, Divider, Dialog, DialogTrigger, FileTrigger, Flex, Heading, Image, Item, Picker, Switch, TabList, TabPanels, Tabs, Text, TextField, View, Form, Content } from '@adobe/react-spectrum'
import React, { useState } from 'react'
import airportData from '../MockDb/Mockdb'
import { Link, useParams } from 'react-router-dom'
import More from "@spectrum-icons/workflow/More"

const AirportDetails = () => {
  const { id } = useParams();
  const airport = airportData.find(airport => airport.id === parseInt(id));
  const [terminals, setTerminals] = useState(airport.terminals);

  const handleAddTerminal = (name, description) => {
    const newTerminal = {
      id: terminals.length + 1,
      name,
      description,
    };
    if(description && name){
    setTerminals([...terminals, newTerminal]);
    }
  };

  return (
    <View padding="size-200">
      <Breadcrumbs>
        <Item key="home">
          <Link to="/" style={{textDecoration:"none" ,color:"black"}}>Airports</Link>
          </Item>
        <Item key="airport name">{airport.name}</Item>
      </Breadcrumbs>
      <Heading marginX="size-100" UNSAFE_style={{ fontSize: "22px" }}>{airport.name}</Heading>
      <Tabs aria-label="History of Ancient Rome">
        <TabList>
          <Item key="FoR">Terminals</Item>
          <Item key="MaR">Transport</Item>
          <Item key="Emp">Contact details</Item>
        </TabList>
        <TabPanels>
          <Item key="FoR">
            <View>
              <Flex direction="row" alignItems="center" wrap gap="size-200">
                {terminals.map((eachItem) => (
                  <Flex
                  key={eachItem.id}
                  gap="size-200"
                  width="size-3600"
                  height="size-1250"
                  marginY="size-100"
                  marginEnd="size-600"
                  UNSAFE_style={{
                    border: "1px solid lightgray",
                    borderRadius: "10px",
                    overflow: "hidden"
                  }}
                >
                  <Image
                    src="https://res.cloudinary.com/db0f83m76/image/upload/v1720167045/Image_sesonp.png"
                    alt="terminal"
                    width="size-2000"
                    height="100%"
                    objectFit="cover"
                  />
                  <Flex direction="column" justifyContent="" padding="size-200" flexGrow={1}>
                    <Flex direction="row" justifyContent="space-between" alignItems="center" UNSAFE_style={{paddingY:"10px"}}>
                      <Text UNSAFE_style={{ fontWeight: "bold" }}>{eachItem.name}</Text>
                      <More marginEnd="size-100" />
                    </Flex>
                    <Text marginTop="size-0">{eachItem.description}</Text>
                  </Flex>
                </Flex>
                ))}
                <DialogTrigger>
                  <ActionButton variant="primary"  style="fill">
                    <Text>+ Add Terminal</Text>
                  </ActionButton>
                  {(close) => (
                    <Dialog>
                      <Heading>Terminal title</Heading>
                      <Content>
                        <Form onSubmit={(e) => {
                          e.preventDefault();
                          const formData = new FormData(e.target);
                          const name = formData.get('name');
                          const description = formData.get('description');
                          handleAddTerminal(name, description);
                          close();
                        }}>
                          <TextField name="name" label="Terminal title" isRequired />
                          <TextField name="description" label="Description" isRequired />
                          <Flex gap="size-200" alignItems="center">
                            <FileTrigger acceptedFileTypes={['image/png']}>
                              <Button variant="primary" marginTop="size-300">Upload Image</Button>
                            </FileTrigger>
                            <Button variant="secondary" marginTop="size-250" onPress={close}>Cancel</Button>
                            <Button type="submit" marginTop="size-250" variant="primary" style='fill'>Continue</Button>
                          </Flex>
                        </Form>
                      </Content>
                    </Dialog>
                  )}
                </DialogTrigger>
              </Flex>
              <Heading>Services</Heading>
              <Flex direction="column" gap="size-125">
                <Text>Lost & found</Text>
                <Divider size="S" />
              </Flex>
              <View paddingY="size-300">
                <Flex gap="size-450" alignItems="center" wrap>
                  <TextField label="Service Name" defaultValue="Lost & Found" isReadOnly />
                  <Picker label="Category" defaultSelectedKey="option 1">
                    <Item key="option 1">Option 1</Item>
                    <Item key="option 2">Option 2</Item>
                    <Item key="option 3">Option 3</Item>
                  </Picker>
                  <Picker label="Sub Category" defaultSelectedKey="option 1">
                    <Item key="option 1">Option 1</Item>
                    <Item key="option 2">Option 2</Item>
                    <Item key="option 3">Option 3</Item>
                  </Picker>
                  <FileTrigger acceptedFileTypes={['image/png']}>
                    <Button variant="primary" marginTop="size-300">Upload Image</Button>
                  </FileTrigger>
                  <Switch marginTop="size-300">Show Image</Switch>
                  <TextField label="Decsription" defaultValue="type here" width="size-3600" isReadOnly />
                </Flex>
                <Flex direction="column" marginTop="size-115" gap="size-125">
                  <Text>Lounge</Text>
                  <Divider size="S" />
                </Flex>
                <Flex direction="column" marginTop="size-115" gap="size-125">
                  <Text>Money Exchange</Text>
                  <Divider size="S" />
                </Flex>
              </View>
            </View>
          </Item>
          <Item key="MaR">
            Transport
          </Item>
          <Item key="Emp">
            Contact details
          </Item>
        </TabPanels>
      </Tabs>
    </View>
  );
};

export default AirportDetails;

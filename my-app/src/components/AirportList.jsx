import React, { useState } from 'react';
import { ActionButton, Button, Cell, Column, Content, Dialog, DialogTrigger, Divider, Flex, Form, Heading, Row, TableBody, TableHeader, TableView, TextField } from '@adobe/react-spectrum';
import Edit from '@spectrum-icons/workflow/Edit';
import Delete from '@spectrum-icons/workflow/Delete';
import { Link } from 'react-router-dom';

const AirportList = ({ data, onUpdate, onDelete }) => {
  const [editData, setEditData] = useState(null);

  const handleEdit = (item) => {
    setEditData(item);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };


  const handleChange = (key, value) => {
    setEditData({ ...editData, [key]: value });
  };

  let columns = [
    { name: 'All Airports', uid: 'name' },
    { name: 'Country', uid: 'country' },
    { name: 'Code', uid: 'code' },
    { name: 'Terminals', uid: 'terminals' },
    { name: '', uid: 'actions' }
  ];

  return (
    <div>
      <TableView aria-label="Example table with dynamic content" selectionMode="multiple">
        <TableHeader columns={columns}>
          {column => (
            <Column key={column.uid} align={column.uid === 'actions' ? 'end' : 'start'}>
              {column.name}
            </Column>
          )}
        </TableHeader>
        <TableBody items={data}>
          {item => (
            <Row key={item.id}>
              {columnKey => (
                <Cell>
                  {columnKey === 'actions' ? (
                    <Flex gap="size-300" justifyContent="end">
                      <DialogTrigger>
                        <ActionButton onPress={() => handleEdit(item)}>
                          <Edit size="S" />
                        </ActionButton>
                        {(close) => (
                          <Dialog>
                            <Heading>Edit Airport</Heading>
                            <Divider />
                            <Content>
                              <Form>
                                <TextField
                                  label="Airport Name"
                                  value={editData?.name}
                                  onChange={(value) => handleChange('name', value)}
                                />
                                <TextField
                                  label="Country"
                                  value={editData?.country}
                                  onChange={(value) => handleChange('country', value)}
                                />
                                <TextField
                                  label="Code"
                                  value={editData?.code }
                                  onChange={(value) => handleChange('code', value)}
                                />
                                <TextField
                                  label="Terminals"
                                  value={editData?.terminals || ''}
                                  onChange={(value) => handleChange('terminals', value)}
                                />
                                <Button onPress={() => { close(); }}>Close</Button>
                              </Form>
                            </Content>
                          </Dialog>
                        )}
                      </DialogTrigger>
                      <ActionButton onPress={() => handleDelete(item.id)}>
                        <Delete size="S" />
                      </ActionButton>
                    </Flex>
                  ) : (
                    <Link to={`/details/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {columnKey === 'terminals' ? item[columnKey].length : item[columnKey]}
                    </Link>
                  )}
                </Cell>
              )}
            </Row>
          )}
        </TableBody>
      </TableView>
    </div>
  );
};

export default AirportList;

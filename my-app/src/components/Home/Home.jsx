import React from 'react';
import { Flex, View } from '@adobe/react-spectrum';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

const Home = ({ children }) => {
  return (
    <Flex direction="column" minHeight="100vh">
      <View borderBottomColor="gray-200" paddingX="size-100" borderBottomWidth="thick">
        <Navbar />
      </View>
      <Flex direction="row" flex="1">
        <View width="size-3000" borderEndColor="gray-200" padding="size-100" borderEndWidth="thick">
          <Sidebar />
        </View>
        <View flex overflow="auto">
          {children}
        </View>
      </Flex>
    </Flex>
  );
};

export default Home;

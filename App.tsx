// App.tsx

import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, View } from 'react-native';
import ProductList from './src/ProductList';
import PincodeInput from './src/PincodeInput';
import CountdownTimer from './src/CountdownTimer';
import DataLoader from './src/DataLoader';
import { getEstimatedDeliveryDate } from './src/DeliveryEstimator';

const App = () => {
  const [pincode, setPincode] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  const handleCalculateDeliveryDate = () => {
    const estimatedDate = getEstimatedDeliveryDate(pincode);
    setDeliveryDate(estimatedDate);
  };

  return (
    <SafeAreaView>
      <DataLoader />
      <ProductList />
      <Text>Enter Pincode:</Text>
      <TextInput
        style={{ borderWidth: 1, margin: 10, padding: 5 }}
        placeholder="Enter pincode"
        value={pincode}
        onChangeText={setPincode}
      />
      <Button title="Calculate Delivery Date" onPress={handleCalculateDeliveryDate} />
      {deliveryDate ? <Text>Estimated Delivery Date: {deliveryDate}</Text> : null}
      <CountdownTimer cutoffHour={17} />
    </SafeAreaView>
  );
};

export default App;

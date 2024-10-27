import React, { useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';

const mockPincodeData = {
  "12345": { provider: "A", region: "urban" },
  "67890": { provider: "B", region: "rural" },
  "11111": { provider: "General", region: "suburban" },
};

const PincodeInput = () => {
  const [pincode, setPincode] = useState('');
  const [error, setError] = useState<string | null>(null);

  const validatePincode = () => {
    if (!mockPincodeData[pincode]) {
      setError('Invalid Pincode. Please enter a valid one.');
    } else {
      setError(null);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter Pincode"
        value={pincode}
        onChangeText={setPincode}
        onBlur={validatePincode} // triggers validation when user leaves the field
      />
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <Button title="Validate Pincode" onPress={validatePincode} />
    </View>
  );
};

export default PincodeInput;

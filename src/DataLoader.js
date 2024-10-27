import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import * as Papa from 'papaparse'; // react-native-csv uses PapaParse for CSV parsing

const DataLoader = () => {
  const [products, setProducts] = useState([]);
  const [pincodes, setPincodes] = useState([]);
  const [stocks, setStocks] = useState([]);

  const parseCSV = async (fileName, setter) => {
    const response = await fetch(fileName); // assuming you’re loading CSV from local or remote
    const csvText = await response.text();
    const parsedData = Papa.parse(csvText, { header: true });
    setter(parsedData.data);
  };

  useEffect(() => {
    parseCSV('assets/products.csv', setProducts);
    parseCSV('assets/pincodes.csv', setPincodes);
    parseCSV('assets/stocks.csv', setStocks);
  }, []);

  return (
    <View>
      <Text>Data Loaded!</Text>
      <Text>Products: {JSON.stringify(products)}</Text>
      <Text>Pincodes: {JSON.stringify(pincodes)}</Text>
      <Text>Stocks: {JSON.stringify(stocks)}</Text>
    </View>
  );
};

export default DataLoader;

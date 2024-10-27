import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const sampleProducts = [
  { id: 1, name: "Product 1", inStock: true },
  { id: 2, name: "Product 2", inStock: false },
  { id: 3, name: "Product 3", inStock: true },
];

const ProductList = () => {
  return (
    <View>
      {sampleProducts.map((product) => (
        <View key={product.id} style={styles.productContainer}>
          <Text>{product.name}</Text>
          {product.inStock ? (
            <Button title="Order" onPress={() => alert("Ordering...")} />
          ) : (
            <Text style={{ color: 'red' }}>Out of Stock</Text>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default ProductList;

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { dynamicSize } from '../utils/dimension.style';
const Card = ({style,children}) => {
  return (
    <View style={[styles.card,style]}>{children}</View>
  );
};
const styles = StyleSheet.create({
  card: {
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
    shadowOpacity: 0.10,
    elevation: 2,
    backgroundColor: 'white',
    marginBottom: 5,
    borderRadius: dynamicSize(12)
  }
});
export default Card;

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './assets/style';
import Product from './components/product';

export default class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <Product title={'Title of product'} subtitle={'subtitle'} price={29} />
      </View>
    );
  }
}

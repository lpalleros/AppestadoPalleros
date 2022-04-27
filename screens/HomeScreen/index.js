import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { Nav, Card } from '../../components';

const HomeScreen = ({navigation}) => { 

  return (
    <View >
      <Nav/>
      <View>
        <Text style={styles.title}>
          Buy products
        </Text>
      </View>
      <TouchableOpacity >
        <Card text="Product 1"/>
      </TouchableOpacity>
      <TouchableOpacity >
        <Card text="Product 2"/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    padding: 10,
    color: '#0c0c0c',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default HomeScreen;
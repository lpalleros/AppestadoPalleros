import { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector,useDispatch } from 'react-redux'
import { Nav, Card } from '../../components';
import { ADD_BAND } from "../../store/actions/bands.action";
import { uuidv4 } from '../../utils/utils';

const HomeScreen = ({navigation}) => { 
  const Bands = useSelector(state => state);
  const dispatch = useDispatch()

  const handleAdd = () => {
    const newID = uuidv4();
    const newItem = {id: newID, name: newID}
    dispatch({type: ADD_BAND, payload: newItem})
  }
  return (
    <View >
      <Nav/>
      <View>
        <Text style={styles.title}>
          Your Bands
        </Text>
        <View>
          <TouchableOpacity onPress={handleAdd}>
            <Text style={styles.title}>Add new </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlatList 
          data={Bands.bands}
          renderItem={ data => (
            <TouchableOpacity>
              <Card text={data.item.name} key={data.item.id}/>
            </TouchableOpacity>
          )}
          keyExtractor= {(item) => item.id}
        />
      </View>
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
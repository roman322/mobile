import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const DATA = [

	
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '7 AM',
	name: "Головний Вокзал",
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '8 AM',
	name: "Головний Вокзал",
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '10 AM',
	name: "Головний Вокзал",
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '11 AM',
	name: "Головний Вокзал",
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '12 PM',
	name: "Головний Вокзал",
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '13 PM',
	name: "Головний Вокзал",
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '14 PM',
	name: "Головний Вокзал",
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '15 PM',
	name: "Головний Вокзал",
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '16 PM',
	name: "Головний Вокзал",
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '17 PM',
	name: "Головний Вокзал",
  },
];

function Item({ title, name }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
	<Text style={styles.title} >Рух шістнадцятого автобуса</Text>
	  <FlatList
        data={DATA}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#75A18B',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
	width:250,
	textAlign: 'center',
  },
  title: {
    fontSize: 18,
	textAlign: "center",
	backgroundColor: '#faa'
  },
});

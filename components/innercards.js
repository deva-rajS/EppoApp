import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
function InnerCards() {
  const DATA = [
    {
      name: 'Ganesh Dr R',
      type: 'Vocal',
      id: '1',
    },
    {
      name: 'Sowmya Dr R',
      type: 'Carnatic Vocal',
      id: '2',
    },
    {
      name: 'Sanjana Harikumar',
      type: 'Violin',
      id: '3',
    },
    {
      name: 'Moozhikulam',
      type: 'Mridangam',
      id: '4',
    },
  ];
  const Item = ({name, type}) => (
    <View style={styles.items}>
      <View style={styles.item_holder}>
        <View style={styles.img_holder}>
          <View>
            <Image
              source={require('../assets/blank-profile.png')}
              style={styles.card_img}
            />
          </View>
          <View style={styles.content_text}>
            <Text style={styles.card_text}>{name}</Text>
            <Text style={styles.type_text}>{type}</Text>
          </View>
        </View>
        <View style={styles.add_holder}>
          <Text style={styles.add_text}>+</Text>
        </View>
      </View>
    </View>
  );
  return (
    <FlatList
      data={DATA}
      renderItem={({item}) => <Item name={item.name} type={item.type} />}
      keyExtractor={item => item.id}></FlatList>
  );
}
const styles = StyleSheet.create({
  items: {},

  item_holder: {
    marginHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    height: 110,
    borderRadius: 20,
    marginBottom: 10,
  },
  img_holder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  add_holder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card_img: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  card_sub_img: {
    height: 30,
    width: 30,
    marginLeft: 12,
    borderRadius: 20,
  },
  side_img: {
    alignContent: 'flex-end',
    justifyContent: 'space-between',
  },
  content_text: {
    paddingLeft: 20,
  },
  card_text: {
    fontSize: 18,
    paddingBottom: 5,
    fontWeight: '700',
  },
  type_text: {
    fontSize: 15,
    fontWeight: '400',
  },
  add_text: {
    fontSize: 30,
    fontWeight: '700',
  },
  card_btn: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    backgroundColor: 'lightgreen',
    borderRadius: 20,
    marginRight: 10,
  },
});

export default InnerCards;

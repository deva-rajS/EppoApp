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
function Cards() {
  const DATA = [
    {
      name: 'Ganesh Dr R',
      type: 'Carnatic Vocal',
      station: 'All India Radio ',
      time: '10:00 AM - 11:00 AM',
      id: '1',
    },
    {
      name: 'Sowmya Dr R',
      type: 'Carnatic Vocal',
      station: 'All India Radio',
      time: '11:30 AM - 12:30 AM',
      id: '2',
    },
    {
      name: 'Sanjana Harikumar',
      type: 'Carnatic Vocal',
      station: 'All India Radio',
      time: '10:00 AM - 11:00 AM',
      id: '3',
    },
    {
      name: 'Moozhikulam',
      type: 'Carnatic Vocal',
      station: 'All India Radio',
      time: '10:00 AM - 11:00 AM',
      id: '4',
    },
    {
      name: 'Malladi Brothers',
      type: 'Carnatic Vocal',
      station: 'All India Radio',
      time: '10:00 AM - 11:00 AM',
      id: '5',
    },
  ];
  const Item = ({name, type, station, time}) => (
    <View>
      <View style={styles.item}>
        <View style={{width: 'auto', justifyContent: 'space-between'}}>
          <Image
            source={require('../assets/blank-profile.png')}
            style={styles.card_img}
          />
        </View>
        <View style={styles.side_img}>
          <Image
            source={require('../assets/blank-profile.png')}
            style={[styles.card_sub_img, {columnGap: 9, rowGap: 9}]}
          />
          <Image
            source={require('../assets/blank-profile.png')}
            style={styles.card_sub_img}
          />
          <Image
            source={require('../assets/blank-profile.png')}
            style={styles.card_sub_img}
          />
        </View>
      </View>
      <View>
        <Text style={styles.card_text}>{name}</Text>
        <TouchableOpacity style={styles.card_btn}>
          <Text>{type}</Text>
        </TouchableOpacity>
        <Text style={styles.card_text}>{station}</Text>
        <Text style={styles.card_text}>{time}</Text>
      </View>
    </View>
  );
  return (
    <FlatList
      data={DATA}
      horizontal
      renderItem={({item}) => (
        <Item
          name={item.name}
          type={item.type}
          station={item.station}
          time={item.time}
        />
      )}
      keyExtractor={item => item.id}></FlatList>
  );
}
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    paddingRight: 20,
  },
  card_img: {
    height: 130,
    width: 130,
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
  card_text: {
    fontSize: 15,
    paddingBottom: 5,
    fontWeight: '500',
  },
  card_btn: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    backgroundColor: 'lightgreen',
    borderRadius: 20,
    marginRight: 10,
  },
});

export default Cards;

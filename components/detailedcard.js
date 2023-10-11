import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import InnerCards from './innercards';

function DetailedCard() {
  return (
    <ScrollView>
      <View style={styles.img_item}>
        <Image
          source={require('../assets/blank-profile.png')}
          style={styles.img_size}
        />
      </View>
      <View style={styles.content_text}>
        <View style={{flex: 1}}>
          <Text style={[styles.text, {fontSize: 18, fontWeight: 600}]}>
            Ganesh Dr R
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.text}>
            All india Radio - MTR Auditorium {'\n'} Praser Bharati
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={styles.type_back}>
            <Text style={[styles.text, {marginBottom: 0}]}>Carnatic Vocal</Text>
          </View>
          <Text style={[styles.text, {marginBottom: 0}]}>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;10 Oct at 10:00 AM
          </Text>
        </View>
      </View>
      <View style={styles.perform}>
        <Text style={styles.text}>Performers</Text>
        {/* <InnerCards /> */}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  img_item: {
    height: 250,
    flex: 1,
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  img_size: {
    height: 250,
    width: 250,
    borderRadius: 200,
  },
  content_text: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 30,
  },
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 10,
  },
  type_back: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: 'green',
  },
  perform: {
    flex: 2,
    marginHorizontal: 20,
  },
});
export default DetailedCard;

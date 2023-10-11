import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

function CardHead() {
  return (
    <View>
      <View style={styles.head_hold}>
        <TouchableOpacity>
          <Text style={styles.back}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Event Details</Text>
        <TouchableOpacity>
          <Text style={styles.close}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  head_hold: {
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  back: {
    fontSize: 24,
    fontWeight: '500',
    color: 'white',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
  },
  close: {
    fontSize: 24,
    fontWeight: '500',
    color: 'white',
  },
});
export default CardHead;

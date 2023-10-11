/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Cards from './components/cards';
import DetailedCard from './components/detailedcard';
import InnerCards from './components/innercards';
import CardHead from './components/cardhearder';

function App() {
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView
        style={{
          backgroundColor: '#7a919e',
        }}>
        {/* <Cards /> */}
        <CardHead />
        <DetailedCard />
        <InnerCards />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;

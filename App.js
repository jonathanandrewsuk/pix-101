import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { HomeStackNavigator } from './components/navigation'


export default class App extends React.Component {
  render() {
    return <HomeStackNavigator />;
  }
}

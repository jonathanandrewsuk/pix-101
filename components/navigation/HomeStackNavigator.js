import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { HomeScreen, DetailsScreen } from '../screens';
import { InfoModal } from '../modals';

const MainStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#e43a30',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    tintColor: 'red'
  },
);

const RootStack = StackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    InfoModal: {
      screen: InfoModal,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default class HomeStackNavigator extends React.Component {
  render() {
    return <RootStack />;
  }
}

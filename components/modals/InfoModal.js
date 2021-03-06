import React from 'react';
import { View, Text, Button, SafeAreaView, StatusBar } from 'react-native';

export default class InfoModal extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar barStyle="dark-content" />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30 }}>This is a modal!</Text>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Dismis"
          />
        </View>
      </SafeAreaView>
    );
  }
}

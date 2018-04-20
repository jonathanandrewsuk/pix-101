import React from 'react';
import { View, Text, Button, StatusBar, SafeAreaView } from 'react-native';
import { LogoTitle } from '../common'

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress={() => navigation.navigate('InfoModal')}
          title="Info"
          color="#fff"
        />
      ),
    };
  };

  render() {

    const { screenProps } = this.props;

    return (
      <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar barStyle="light-content"/>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
                <Button
                  title="Go to Details"
                  onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    this.props.navigation.navigate('Details', {
                      itemId: 86,
                      otherParam: 'anything you want here',
                      title: screenProps.hello.greeting
                    });
                  }}
                />
          </View>
      </SafeAreaView>
    );
  }
}

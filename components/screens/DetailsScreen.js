import React from 'react';
import { View, Text, Button } from 'react-native';

export default class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
  const { params } = navigation.state;

  return {
    title: params ? params.title : 'A Nested Details Screen',
  }
};

  render() {
    const { screenProps } = this.props;

    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;
    const title = params ? params.title : null;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>title: {JSON.stringify(title)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Change Greeting"
          onPress={() => screenProps.allActions.changeGreeting()}
        />
      </View>
    );
  }
}

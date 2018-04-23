import React from 'react';
import { View, Text, Button } from 'react-native';

export default class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
  const { params } = navigation.state;
  return {
    title: 'Details'
  }
};

  render() {
    const { comments, downloads, favorites, id, largeImageURL, likes, pageURL, tags, user, userImageURL, views } = this.props.screenProps.images.selectedItem;
    const { params } = this.props.navigation.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{user}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

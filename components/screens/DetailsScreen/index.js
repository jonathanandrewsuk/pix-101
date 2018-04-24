import React from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';
import { WebBrowser } from 'expo';
import styles from './styles';

export default class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
  const { params } = navigation.state;
  return {
    title: 'Details'
  }
};

_handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync(`${this.props.screenProps.images.selectedItem.pageURL}`);
  }

  render() {
    console.log(this.props.screenProps.images.selectedItem)
    const { comments, downloads, favorites, id, largeImageURL, likes, pageURL, tags, user, userImageURL, views, webformatURL, imageHeight, imageWidth } = this.props.screenProps.images.selectedItem;
    const { params } = this.props.navigation.state;

    return (
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Image style={styles.imageSize} source={{ uri: webformatURL }} />
        <View style={styles.userContainer}>
          <Image style={styles.userImage} source={userImageURL ? { uri: userImageURL } : null} />
          <Text style={styles.infoText}>{user}</Text></View>
        <View style={styles.metaDataContainer}>
          <View style={styles.detailsContainer}><Text style={{fontWeight: 'bold'}}>Tags</Text> <Text>{tags}</Text></View>
          <View style={styles.detailsContainer}>
            <Text style={{fontWeight: 'bold'}}>Resolution</Text>
            <Text>{imageWidth} x {imageHeight} px</Text>
          </View>
        </View>
        <View style={{flex: 0.5, marginBottom: 20, padding: 20}}>
          <Button onPress={this._handleOpenWithWebBrowser} title="View on Pixabay"></Button>
        </View>
      </ScrollView>
    );
  }
}

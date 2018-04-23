import React from 'react';
import { View, Text, Button, StatusBar, SafeAreaView, ListView, Image, StyleSheet, TextInput } from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import { LogoTitle, ListItem } from '../common'

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

    handleSearchQuery = () => {
          this.props.screenProps.allActions.fetchImages(this.props.screenProps.images)
      }

      handleTextInput = (searchFor) => {
          this.props.screenProps.allActions.handleTextInput(searchFor)
        }

        selectItem = (item) => {
          this.props.screenProps.allActions.selectItem(item)
          this.props.navigation.navigate('Details', this.props.screenProps.images);
        }

  render() {
      const { dataSource, searchFor, selectedItem, home } = this.props.screenProps.images;
    return (
      <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar barStyle="light-content"/>
        <TextInput
          placeholder="Enter something to search for!"
          style={styles.textInputStyles}
          onChangeText={this.handleTextInput}
          onSubmitEditing={this.handleSearchQuery}
          value={searchFor}
        />
        <ListView
          renderScrollComponent={(props) => <InfiniteScrollView {...props} />}
          dataSource={dataSource}
          onLoadMoreAsync={this.handleSearchQuery}
          enableEmptySections={true}
          canLoadMore={true}
          distanceToLoadMore={5}
          renderRow={(rowData) => (
            <ListItem
              rowData={rowData}
              selectItem={this.selectItem}
            />
            )}
        />
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#00A4D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
  },
  textInputStyles: {
    height: 40,
    borderColor: '#FFF',
    borderWidth: 1,
    color: '#FFF',
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
  },
  imageSize: {
    width: 300,
    height: 100,
  },
  buttonBackground: {
    backgroundColor: '#ED4956',
    justifyContent: 'center',
    width: 400,
  }
});

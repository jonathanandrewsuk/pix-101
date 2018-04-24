import React from 'react';
import { View, Text, Button, StatusBar, SafeAreaView, ListView, Image, StyleSheet, TextInput } from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import { Ionicons } from '@expo/vector-icons';
import { LogoTitle, ListItem } from '../../common';
import styles from './styles';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: <LogoTitle />,
    };
  };

    handleSearchQuery = () => {
        this.props.screenProps.allActions.clearThenFetchImages(this.props.screenProps.images)
      }

    loadMore = () => {
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
        <View style={styles.searchSection}>
          <Ionicons style={styles.searchIcon} name="ios-search" size={20}/>
          <TextInput
            style={styles.textInputStyles}
            placeholder="e.g. 'Cats'"
            onChangeText={this.handleTextInput}
            onSubmitEditing={this.handleSearchQuery}
            value={searchFor}
        />
      </View>
      {(this.props.screenProps.images.dataSource._cachedRowCount > 0) ?
        <ListView
          style={styles.listView}
          renderScrollComponent={(props) => <InfiniteScrollView {...props} />}
          dataSource={dataSource}
          onLoadMoreAsync={this.loadMore}
          enableEmptySections={true}
          canLoadMore={true}
          distanceToLoadMore={5}
          renderRow={(rowData) => (
            <ListItem
              rowData={rowData}
              selectItem={this.selectItem}
            />
          )}
        /> : <Image source={require('../../../assets/images/placeholder.png')} style={styles.noDataImagePlaceholder}/>}
      </SafeAreaView>
    );
  }
}

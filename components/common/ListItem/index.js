import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Dimensions, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const ListItem = ({ rowData, selectItem }) => (
  <TouchableOpacity style={styles.touchableOpacity} onPress={() => selectItem(rowData)}>
    <View style={styles.topInfo}>
      <Image
        style={styles.userImage}
        source={rowData.userImageURL ? { uri: rowData.userImageURL } : null}
      />
      <Text style={styles.infoText}>{rowData.user}</Text>
    </View>
    <Image
      style={styles.imageSize}
      source={rowData.webformatURL ? { uri: rowData.webformatURL } : null}
    />
    <View style={styles.info}>
      <View>
        <Text style={styles.infoText}>
          {rowData.likes + (rowData.likes !== 1 ? ' likes' : ' like')}
        </Text>
      </View>
      <Ionicons name="ios-arrow-forward" size={25} style={styles.iconStyle} />
    </View>
  </TouchableOpacity>
);

export default ListItem;

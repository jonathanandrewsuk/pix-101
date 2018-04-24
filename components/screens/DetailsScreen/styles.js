import { StyleSheet, Dimensions } from 'react-native';
import { COLOR_PRIMARY } from '../../../styles/common';

export default StyleSheet.create({
  imageSize: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userImage: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    borderRadius: Dimensions.get('window').width / 6,
    margin: 10,
  },
  pixabayButton: {
    color: COLOR_PRIMARY,
  },
  detailsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    maxWidth: 150,
  },
  contentContainerStyle: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  userContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  metaDataContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
});

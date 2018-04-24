import { StyleSheet, Dimensions } from 'react-native';
import { COLOR_PRIMARY } from '../../../styles/common';


export default StyleSheet.create({
  touchableOpacity: {
    marginBottom: 2.5,
  },
  imageSize: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
  userImage: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    marginRight: 10,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: '#d8d8d8',
    backgroundColor: 'white',
  },
  topInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: '#d8d8d8',
    backgroundColor: 'white',
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconStyle: {
    color: COLOR_PRIMARY,
  },
});

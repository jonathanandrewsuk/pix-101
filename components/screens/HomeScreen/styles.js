import { StyleSheet, Dimensions } from 'react-native';
import { COLOR_GREY, COLOR_WHITE } from '../../../styles/common';


export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#00A4D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: COLOR_WHITE,
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
  },
  textInputStyles: {
    paddingLeft: 15,
    width: '100%',
    height: 50,
    borderColor: '#FFF',
    borderWidth: 1,
    color: 'black',
    fontWeight: 'bold',
  },
  imageSize: {
    width: 300,
    height: 100,
  },
  buttonBackground: {
    backgroundColor: '#ED4956',
    justifyContent: 'center',
    width: 400,
  },
  listView: {
    backgroundColor: '#D2D7D3',
  },
  searchSection: {
    width: '100%',
    paddingLeft: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
  },
  searchIcon: {
    color: COLOR_GREY,
  },
  noDataImagePlaceholder: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    flex: 1,
    opacity: 0.2,
  },
});

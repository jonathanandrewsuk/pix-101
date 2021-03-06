import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator } from 'react-navigation';
import * as allActions from '../../../redux/actions';
import { HomeScreen, DetailsScreen } from '../../screens';
import { InfoModal } from '../../modals';
import styles from './styles';

const MainStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: styles.headerStyle,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    tintColor: 'red',
  },
);

const RootStack = StackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    InfoModal: {
      screen: InfoModal,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export class HomeStackNavigator extends React.Component {
  render() {
    return <RootStack screenProps={this.props} />;
  }
}

const mapStateToProps = state => ({
  images: state.images,
});
const mapDispatchToProps = dispatch => ({
  allActions: bindActionCreators(allActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeStackNavigator);

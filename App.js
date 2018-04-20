import React from 'react';
import { Provider } from 'react-redux';
import { HomeStackNavigator } from './components/navigation';
import store from './redux/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HomeStackNavigator />
      </Provider>
    );
  }
}

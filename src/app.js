import { Provider } from 'react-redux';
import store from './redux/store';
import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  BackAndroid,
  View,
  Text,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    if (!App.instance) {
      App.instance = this;
    }
  }
  render() {
    return (
      <View>
        <Text>Hello!</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('qzistant', () => App);

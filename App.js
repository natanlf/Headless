/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry} from 'react-native';

import PushNotificationAndroid  from 'react-native-push-notification'

const LogLocation = async (data) => {

    msg = "";

   data.hasInternet ? msg="Conectado a internet" : msg="Desconectado da internet"

    PushNotificationAndroid.localNotification({
    //... You can use all the options from localNotifications
    message: this.msg, // (required)
    date: new Date(Date.now() + (60 * 1000)) // in 60 secs
  });

   //alert(JSON.stringify(data))
}
AppRegistry.registerHeadlessTask('LogLocation', () => LogLocation)

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

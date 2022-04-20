/**
 * @format
 */

import * as React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/app';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

const HeadlessCheck = ({ isHeadless }) => {
  if (isHeadless) {
    return null;
  }
  return <App />;
};

AppRegistry.registerComponent(appName, () => HeadlessCheck);

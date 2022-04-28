import * as React from 'react';
import 'react-native-gesture-handler';

import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileEdit from './screens/profile/profile-edit';
import ChooseAvatar from './screens/choose-avatar/choose-avatar';
import Tabs from './routes/tabs';
import CameraScreen from './screens/camera-screen/camera-screen';
import { Container } from './styles/global-styles';

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();

  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

const Stack = createNativeStackNavigator();

const App = () => {
  requestUserPermission();

  React.useEffect(() => {
    return messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
  }, []);

  return (
    <Container>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tab"
            component={Tabs}
            options={{ headerShown: false, fullScreenGestureEnabled: true }}
          />
          <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
          <Stack.Screen name="ChooseAvatar" component={ChooseAvatar} />
          <Stack.Screen name="CameraScreen" component={CameraScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Container>
  );
};

export default App;

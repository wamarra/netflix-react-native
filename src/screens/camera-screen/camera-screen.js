import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { CustomButton, Screen } from './camera-screen-styled';

const CameraScreen = ({ navigation, route }) => {
  const devices = useCameraDevices();
  const deviceFront = devices.front;
  const deviceBack = devices.back;
  const camera = React.useRef(null);
  const photoOptions = React.useMemo(
    () => ({
      flash: 'on',
    }),
    [],
  );

  const onTakePhoto = React.useCallback(() => {
    camera.current.takePhoto(photoOptions).then(photo => {
      navigation.navigate('ProfileView', {
        image: `file://${photo.path}`,
        name: route.params.name,
        icon: null,
      });
    });
  }, [navigation, photoOptions, route.params.name]);

  React.useEffect(() => {
    Camera.requestCameraPermission().then(result => {
      console.log(result);
    });
    Camera.requestMicrophonePermission().then(result => {
      console.log(result);
    });
  }, []);

  if (deviceFront == null && deviceBack == null) {
    return <View />;
  }

  return (
    <Screen>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={deviceBack ?? deviceFront}
        isActive={true}
        photo={true}
      />
      <TouchableOpacity onPress={onTakePhoto}>
        <CustomButton />
      </TouchableOpacity>
    </Screen>
  );
};

export default CameraScreen;

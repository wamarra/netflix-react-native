import * as React from 'react';
import { useAvatar } from '../../services/avatar';
import Avatar from '../../components/avatar/avatar';
import { Button, Label, Row, Screen } from './choose-avatar-styled';

const ChooseAvatar = ({ navigation, route }) => {
  const { avatars } = useAvatar();

  React.useEffect(() => {
    navigation.setOptions({
      title: 'Choose your Avatar',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 16,
      },
      headerStyle: {
        backgroundColor: 'black',
        borderBottomColor: '#ffffff',
      },
      headerTintColor: 'white',
    });
  }, [navigation, avatars]);

  return (
    <Screen>
      <Label>Classic</Label>
      <Row horizontal>
        {avatars.map((item, index) => (
          <Avatar
            key={index}
            image={item}
            onPress={() => {
              navigation.navigate('ProfileView', {
                icon: item,
                name: route?.params?.name,
                image: null,
              });
            }}
          />
        ))}
      </Row>
      <Label>Criar seu Avatar</Label>
      <Button
        color="#1a1718"
        title="CAMERA"
        onPress={() => {
          navigation.navigate('CameraScreen', {
            name: route?.params?.name,
          });
        }}
      />
    </Screen>
  );
};

export default ChooseAvatar;

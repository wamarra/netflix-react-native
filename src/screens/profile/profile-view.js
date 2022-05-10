import React from 'react';
import Avatar from '../../components/avatar/avatar.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useProfile } from '../../services/profile';
import {
  AvantarsContainer,
  ButtonLabel,
  NetflixButton,
  Row,
  Screen,
} from './profile-styled';
import { AppContext } from '../../contexts/app-context.js';
import { translate } from '../../i18n/index.js';

const replaceAvatarsWithImage = (profiles, route) => {
  if (route?.params?.name) {
    profiles.map(item => {
      if (item.name === route.params.name) {
        if (route?.params?.image) {
          item.uri = route.params.image;
          item.image = null;
        }
        if (route?.params?.icon) {
          item.icon = route.params.icon;
          item.uri = null;
        }
      }
      return item;
    });
  }
};

const ProfileView = ({ navigation, route }) => {
  const { profiles } = useProfile();

  replaceAvatarsWithImage(profiles, route);

  const selectProfile = React.useCallback(
    item => {
      navigation.navigate('Home', { name: item.name });
    },
    [navigation],
  );

  const editProfile = React.useCallback(() => {
    navigation.navigate('ProfileEdit', { profiles: profiles });
  }, [navigation, profiles]);

  return (
    <AppContext.Consumer>
      {({ setUser }) => (
        <Screen>
          <AvantarsContainer>
            <Row horizontal>
              {profiles.map(profile => (
                <Avatar
                  key={profile.name}
                  image={profile.icon}
                  uri={profile.uri}
                  name={profile.name}
                  onPress={() => {
                    setUser(profile);
                    selectProfile(profile);
                  }}
                />
              ))}
            </Row>
          </AvantarsContainer>
          <NetflixButton onPress={editProfile}>
            <Icon name="edit" size={24} color="gray" />
            <ButtonLabel>{translate('profile-manager')}</ButtonLabel>
          </NetflixButton>
        </Screen>
      )}
    </AppContext.Consumer>
  );
};

export default ProfileView;

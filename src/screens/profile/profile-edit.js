import * as React from 'react';
import Avatar from '../../components/avatar/avatar';
import { translate } from '../../i18n';
import { GoBackButton, RowContainer, Screen } from './profile-styled';

const ProfileEdit = ({ navigation, route }) => {
  const [items, setItems] = React.useState([]);

  const twoBytwo = React.useCallback(profiles => {
    const result = [];
    profiles?.forEach((item, index) => {
      if (index % 2 === 0) {
        result.push([]);
      }
      result[Math.floor(index / 2)].push(item);
    });
    return result;
  }, []);

  const setNavigationOptions = React.useCallback(() => {
    navigation.setOptions({
      title: translate('profile-manager'),
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 16,
      },
      headerStyle: {
        backgroundColor: 'black',
        borderBottomColor: '#ffffff',
      },
      headerTintColor: 'white',
      headerLeft: () => (
        <GoBackButton
          onPress={() => navigation.goBack()}
          title={translate('done')}
          color="black"
        />
      ),
    });
  }, [navigation]);

  React.useEffect(() => {
    setNavigationOptions();
    setItems(twoBytwo(route?.params?.profiles));
  }, [route?.params?.profiles, setNavigationOptions, twoBytwo]);

  return (
    <Screen>
      {items.map((row, rowIndex) => (
        <RowContainer key={rowIndex}>
          {row.map(column => (
            <Avatar
              key={column.name}
              big={true}
              onPress={() => {
                navigation.navigate('ChooseAvatar', { name: column.name });
              }}
              edit
              image={column.icon}
              uri={column.uri}
              name={column.name}
            />
          ))}
        </RowContainer>
      ))}
    </Screen>
  );
};

export default ProfileEdit;

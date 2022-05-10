import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { translate } from '../../i18n';
import { Container, Logo, Menu } from './header-styled';

const logo = '../../assets/logo.png';

const Header = ({ navigation }) => {
  const [menu, setMenu] = React.useState([]);

  React.useEffect(() => {
    setMenu([translate('series'), translate('movies'), translate('my-list')]);
  }, []);

  return (
    <LinearGradient colors={['#3d3d3f', 'transparent']}>
      <Container>
        <Logo resizeMode="contain" source={require(logo)} />
        {menu?.map(menuItem => (
          <Menu
            onPress={() => navigation.navigate('ProfileView')}
            key={menuItem}>
            {menuItem}
          </Menu>
        ))}
      </Container>
    </LinearGradient>
  );
};

export default Header;

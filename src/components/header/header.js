import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Container, Logo, Menu } from './header-styled';

const Header = () => {
  const [menu, setMenu] = React.useState([]);

  React.useEffect(() => {
    setMenu(['Séries', 'Filmes', 'Minha lista']);
  }, []);

  return (
    <LinearGradient colors={['#3d3d3f', 'transparent']}>
      <Container>
        <Logo resizeMode="contain" source={require('../../assets/logo.png')} />
        {menu?.map(menuItem => (
          <Menu key={menuItem}>{menuItem}</Menu>
        ))}
      </Container>
    </LinearGradient>
  );
};

export default Header;

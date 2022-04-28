import * as React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {
  Banner,
  Button,
  Container,
  Logo,
  MenuHero,
  MenuTag,
  MovieCard,
  MoviePoster,
  Play,
  Separator,
  Tags,
  TextButton,
  TextButtonPlay,
} from './hero-styled';

const logo = '../../assets/logo.png';
const banner = '../../assets/banner.png';

const Hero = ({ poster, startBottomSheet }) => {
  const [myListIcon, setMyListIcon] = React.useState('plus');
  const renderMovieCard = React.useMemo(
    () => (
      <MovieCard>
        <MoviePoster resizeMode="cover" source={poster} />
        <Logo resizeMode="contain" source={require(logo)} />
      </MovieCard>
    ),
    [poster],
  );

  return (
    <Container>
      <LinearGradient colors={['transparent', 'black']}>
        <Banner resizeMode="contain" source={require(banner)} />
        <Tags>
          <MenuTag>Envolvente</MenuTag>
          <Separator />
          <MenuTag>Empolgantes</MenuTag>
        </Tags>
        <MenuHero>
          <Button
            onPress={() =>
              setMyListIcon(actual => (actual === 'plus' ? 'check' : 'plus'))
            }>
            <Feather name={myListIcon} size={26} color="white" />
            <TextButton>Minha lista</TextButton>
          </Button>

          <Play>
            <Ionicons name="ios-play" size={23} color="black" />
            <TextButtonPlay>Assistir</TextButtonPlay>
          </Play>

          <Button onPress={() => startBottomSheet('movie', 0, renderMovieCard)}>
            <Feather name="info" size={22} color="white" />
            <TextButton>Saiba mais</TextButton>
          </Button>
        </MenuHero>
      </LinearGradient>
    </Container>
  );
};

export default Hero;

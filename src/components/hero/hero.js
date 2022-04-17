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

const Hero = ({ poster, startBottomSheet }) => {
  const renderMovieCard = React.useMemo(
    () => (
      <MovieCard>
        <MoviePoster resizeMode="cover" source={poster} />
        <Logo resizeMode="contain" source={require('../../assets/logo.png')} />
      </MovieCard>
    ),
    [poster],
  );

  return (
    <Container>
      <LinearGradient colors={['transparent', 'black']}>
        <Banner
          resizeMode="contain"
          source={require('../../assets/banner.png')}
        />
        <Tags>
          <MenuTag>Envolvente</MenuTag>
          <Separator />
          <MenuTag>Empolgantes</MenuTag>
        </Tags>
        <MenuHero>
          <Button>
            <Feather name="plus" size={26} color="white" />
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

import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { useSpring } from 'react-spring/native';
import BottomSheetContent from '../../components/bottom-sheet/bottom-sheet-content';
import Header from '../../components/header/header';
import Hero from '../../components/hero/hero';
import Movies from '../../components/movies/movies';
import { AppContext } from '../../contexts/app-context';
import { getLanguage, translate } from '../../i18n';
import { useMovie } from '../../services/movie';
import { Container, Poster } from './home-styled';

const posterImage = '../../assets/poster.jpg';

const Home = ({ navigation }) => {
  const { user } = React.useContext(AppContext);
  const { movies, moviesToResume, moviePosters, nationalMovies } = useMovie();
  const [movie, setMovie] = React.useState();
  const [movieCard, setMovieCard] = React.useState();
  const [resumedMovies, setResumedMovies] = React.useState([]);
  const [moviesRecentlyAdded, setMoviesRecentlyAdded] = React.useState([]);
  const [moviesOnHigh, setMoviesOnHigh] = React.useState([]);
  const [top10, setTop10] = React.useState([]);
  const sheetRef = React.useRef(null);
  const snapPoints = React.useMemo(() => ['33%'], []);
  const handleIndicatorStyle = React.useMemo(() => ({ display: 'none' }), []);
  const backgroundBottomSheet = React.useMemo(
    () => ({ backgroundColor: '#262728' }),
    [],
  );

  const handleSnapPress = React.useCallback(
    (id, index, renderMovieCard) => {
      setMovie(movies.find(movieItem => movieItem[id])?.[id]);
      setMovieCard(renderMovieCard);
      sheetRef.current?.snapToIndex(index);
    },
    [movies],
  );

  const handleSheetChange = React.useCallback(index => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  const handleClosePress = React.useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const posterAnimation = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: configItem => ({ ...configItem.default, duration: 1200 }),
  });

  React.useEffect(() => {
    const items = [];
    const items2 = [];
    const top10Items = [];

    moviePosters.forEach((poster, index) => {
      index % 2 ? items.push(poster) : items2.push(poster);

      if (index > 6) {
        top10Items.push(poster);
      }
    });

    setMoviesRecentlyAdded(items);
    setMoviesOnHigh(items2);
    setTop10(top10Items);
  }, [moviePosters]);

  React.useEffect(() => {
    setResumedMovies(moviesToResume[user?.name]);
  }, [moviesToResume, user]);

  React.useEffect(() => {
    console.log(getLanguage());
  }, []);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Poster style={posterAnimation} source={require(posterImage)}>
          <Header navigation={navigation} />
          <Hero
            poster={moviePosters[0]?.poster}
            startBottomSheet={handleSnapPress}
          />
        </Poster>
        {resumedMovies?.length > 0 && (
          <Movies
            label={translate('continue')}
            items={resumedMovies}
            startBottomSheet={handleSnapPress}
          />
        )}
        {nationalMovies?.length > 0 && (
          <Movies
            label={translate('national-movies')}
            items={nationalMovies}
            startBottomSheet={handleSnapPress}
          />
        )}
        <Movies
          label={translate('recently-added')}
          items={moviesRecentlyAdded}
          startBottomSheet={handleSnapPress}
        />
        <Movies
          label={translate('top-10')}
          items={top10}
          isTop10
          startBottomSheet={handleSnapPress}
        />
        <Movies
          label={translate('on-high')}
          items={moviesOnHigh}
          startBottomSheet={handleSnapPress}
        />
      </Container>
      <BottomSheet
        index={-1}
        ref={sheetRef}
        snapPoints={snapPoints}
        backgroundStyle={backgroundBottomSheet}
        handleIndicatorStyle={handleIndicatorStyle}
        onChange={handleSheetChange}>
        <BottomSheetView>
          <BottomSheetContent
            movie={movie}
            movieCard={movieCard}
            handleClosePress={handleClosePress}
          />
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

export default Home;

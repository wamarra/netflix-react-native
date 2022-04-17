import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { useMovies } from '../../services/movies';
import {
  Top10Banner,
  Container,
  Label,
  MovieCard,
  MoviePoster,
  MovieScroll,
  Top10Numbers,
  Logo,
} from './movies-styled';

const Movies = ({ label, items, isTop10, startBottomSheet }) => {
  const { top10Numbers } = useMovies();

  const renderMovieCard = React.useCallback(
    (poster, index, withTop10Number) => (
      <MovieCard withTop10Number={isTop10 && withTop10Number}>
        <MoviePoster resizeMode="cover" source={poster} />
        <Logo resizeMode="contain" source={require('../../assets/logo.png')} />
        {isTop10 && (
          <>
            <Top10Banner
              source={require('../../assets/top10/top10Banner.png')}
            />
            {withTop10Number && (
              <Top10Numbers resizeMode="cover" source={top10Numbers[index]} />
            )}
          </>
        )}
      </MovieCard>
    ),
    [isTop10, top10Numbers],
  );

  return (
    <Container>
      <Label>{label}</Label>
      <MovieScroll horizontal>
        {items.map(({ id, poster }, index) => (
          <TouchableOpacity
            key={id}
            onPress={() =>
              startBottomSheet(id, 0, renderMovieCard(poster, index, false))
            }>
            {renderMovieCard(poster, index, true)}
          </TouchableOpacity>
        ))}
      </MovieScroll>
    </Container>
  );
};

export default Movies;

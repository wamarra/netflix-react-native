import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { useMovie } from '../../services/movie';
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

const logo = '../../assets/logo.png';
const top10Banner = '../../assets/top10/top10Banner.png';

const Movies = ({ label, items, isTop10, startBottomSheet }) => {
  const { top10Numbers } = useMovie();

  const renderMovieCard = React.useCallback(
    (poster, index, withTop10Number) => (
      <MovieCard withTop10Number={isTop10 && withTop10Number}>
        <MoviePoster resizeMode="cover" source={poster} />
        <Logo resizeMode="contain" source={require(logo)} />
        {isTop10 && (
          <>
            <Top10Banner source={require(top10Banner)} />
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
            key={id + index}
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

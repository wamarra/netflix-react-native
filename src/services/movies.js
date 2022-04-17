import * as React from 'react';

const moviePostersApi = [
  { id: 'movie', poster: require('../assets/movie.jpg') },
  { id: 'movie1', poster: require('../assets/movie1.jpg') },
  { id: 'movie2', poster: require('../assets/movie2.jpg') },
  { id: 'movie3', poster: require('../assets/movie3.jpg') },
  { id: 'movie4', poster: require('../assets/movie4.jpg') },
  { id: 'movie5', poster: require('../assets/movie5.jpg') },
  { id: 'movie6', poster: require('../assets/movie6.jpg') },
  { id: 'movie7', poster: require('../assets/movie7.jpg') },
  { id: 'movie8', poster: require('../assets/movie8.jpg') },
  { id: 'movie9', poster: require('../assets/movie9.jpg') },
  { id: 'movie10', poster: require('../assets/movie10.jpg') },
  { id: 'movie11', poster: require('../assets/movie11.jpg') },
  { id: 'movie12', poster: require('../assets/movie12.jpg') },
  { id: 'movie13', poster: require('../assets/movie13.jpg') },
  { id: 'movie14', poster: require('../assets/movie14.jpg') },
  { id: 'movie15', poster: require('../assets/movie15.jpg') },
  { id: 'movie16', poster: require('../assets/movie16.jpg') },
];

const top10NumbersApi = {
  0: require('../assets/top10/top1.png'),
  1: require('../assets/top10/top2.png'),
  2: require('../assets/top10/top3.png'),
  3: require('../assets/top10/top4.png'),
  4: require('../assets/top10/top5.png'),
  5: require('../assets/top10/top6.png'),
  6: require('../assets/top10/top7.png'),
  7: require('../assets/top10/top8.png'),
  8: require('../assets/top10/top9.png'),
  9: require('../assets/top10/top10.png'),
};

const moviesApi = require('../assets/movies.json');

export const useMovies = () => {
  const [movies, setMovies] = React.useState([]);
  const [moviePosters, setMoviePosters] = React.useState([]);
  const [top10Numbers, setTop10Numbers] = React.useState([]);

  React.useEffect(() => {
    setMovies(moviesApi);
    setMoviePosters(moviePostersApi);
    setTop10Numbers(top10NumbersApi);
  }, []);

  return { movies, moviePosters, top10Numbers };
};

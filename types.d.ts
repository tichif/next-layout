type MovieType = {
  id: number;
  original_title: string;
  backdrop_path: string;
};

type MoviesType = {
  page: number;
  results: MovieType[];
};

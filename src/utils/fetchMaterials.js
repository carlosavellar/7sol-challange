const fetchMovies = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/all/day?api_key=e11274943e564338428e48ffc1fa3059'
  );
  return await response.json();
};

export default fetchMovies;

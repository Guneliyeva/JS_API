console.log(`Film name: `);
fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1")
  .then((res) => res.json())
  .then((data) => {
    data.results.map((movie) => {
      console.log(`${movie.title} || ${movie.original_title} || IMDB: ${Math.round(movie.vote_average)} `);
    });
  });
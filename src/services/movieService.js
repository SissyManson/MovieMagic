const Movie = require('../Models/Movie');


// TODO: filter result in MongoDB
exports.search = async (title, genre, year) => {
   let result = await Movie.find().lean();

   if (title) {
      result = result.filter((movie) =>
         movie.title.toLowerCase().includes(title.toLowerCase())
      );
   }
   if (genre) {
      result = result.filter((movie) =>
         movie.genre.toLowerCase().includes(genre.toLowerCase())
      );
   }
   if (year) {
      result = result.filter((movie) => movie.year === year);
   }

   return result;
};

exports.getAll = () => Movie.find();
//TODO: do sth when there are NO movies
exports.getMovieById = (movieId) => Movie.findById(movieId);
exports.create = (movieData) => Movie.create(movieData);

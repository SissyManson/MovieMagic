const Movie = require('../Models/Movie');
const Cast = require('../Models/Cast');

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
exports.getMovieById = (movieId) => Movie.findById(movieId).populate('casts');

exports.create = (movieData) => Movie.create(movieData);

exports.attach = async (movieId, castId) => {
   // return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
   const cast = await Cast.findById(castId);
   const movie = await this.getMovieById(movieId);

   //TODO: validate if the cast is already added
   // TODO: validate castId if it exists

   movie.casts.push(cast);
   cast.movies.push(movie);
   
   await movie.save();
   await cast.save();

   return movie;
};

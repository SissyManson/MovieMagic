const Movie = require('../Models/Movie');
const Cast = require('../Models/Cast');

// TODO: filter result in MongoDB
exports.search = (title, genre, year) => {
   let query = {};
   // let query2 = Movie.find(); // another way to Search

   if (title) {
      query.title = new RegExp(title, 'i');
      // query2 = query2.find({ title: new RegExp(title, 'i') });
   }
   if (genre) {
      query.genre = genre.toLowerCase();
   }
   if (year) {
      query.year = year;
      // query2 = query2.find({ year });
   }

   return Movie.find(query);
   // return query2;
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

const movies = [
   {
      title: 'The Conjuring',
      genre: 'Horror',
      director: 'James Wan',
      year: '2013',
      imageUrl:
         'https://irs.www.warnerbros.com/keyart-jpeg/conjuring_keyart.jpg',
      rating: '4',
      description:
         'Before there was Amityville, there was Harrisville. The Conjuring tells the horrifying true story of Ed and Lorraine Warren, world renowned paranormal investigators, who were called to help a family terrorized by a dark presence in a secluded farmhouse. Forced to confront a powerful demonic entity, the Warrens find themselves caught in the most terrifying case of their lives. Oscar® nominee Vera Farmiga (The Departed) and Golden Globe nominee Patrick Wilson (Insidious) play the investigators while Golden Globe nominee Ron Livingston (Band of Brothers) and Emmy® nominee Lili Taylor (Six Feet Under) play the Perron family plagued by sinister spirits in this dark chiller from the writers of The Reaping and the creator of the Saw films.',
   },
   {
      title: 'The 100 Candles Game: The Last Possession',
      genre: 'Horror',
      director: 'Carlos Goitia',
      year: '2023',
      imageUrl:
         'https://m.media-amazon.com/images/M/MV5BYTdjOTNmZjgtNThiYy00NzFlLTg1NjktMmY2MGQzZTkzNWY2XkEyXkFqcGdeQXVyMTY1NDQ5ODA@._V1_.jpg',
      rating: '5',
      description:
         'A team of influencer bloggers decides to hold a ritual at the mansion of the "black countess". A fan of the supernatural, she disappeared without a trace after she was offered to play a game that was supposed to take her to another dimension. By evoking the spirit of the Countess, bloggers let otherworldly forces into the world. The one who can bring the demons back will survive.',
   },
];

exports.create = (movieData) => {
   console.log(movieData);
   movies.push(movieData);
};

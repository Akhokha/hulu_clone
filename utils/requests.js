const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchSciFi: {
    title: "Sci-fi",
    url: `discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTV: {
    title: "TV Movie",
    url: `discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
};
// const requests = {
//     fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//     fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}$with_networks=213`,
//     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genre=28`,
//     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genre=35`,
//     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genre=27`,
//     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genre=10749`,
//     fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genre=99`,
//   }
//   export default requests;

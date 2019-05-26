import {
  buildMovieIdURL,
  pickId,
  buildMovieVideosURL,
  pickVideos
} from "./tmdb";
import Config from "../config";

test("build url to fetch TMDB movieId", () => {
  const mockMovieInfoURL = `https://api.themoviedb.org/3/find/tt0903747?api_key=${
    Config.TMDB_API_KEY
  }&language=en-US&external_source=imdb_id`;

  expect(buildMovieIdURL("tt0903747")).toEqual(mockMovieInfoURL);
});

test("build url to fetch TMDB movieId", () => {
  const mockMovieVideosURL = `https://api.themoviedb.org/3/movie/1824/videos?api_key=${
    Config.TMDB_API_KEY
  }&language=en-US`;

  expect(buildMovieVideosURL(1824)).toEqual(mockMovieVideosURL);
});

test("get Id out of movie info", () => {
  const mockData = {
    movie_results: [
      {
        adult: false,
        backdrop_path: "/eabV1BbZgghMJSOmjZ1EQ987Zuh.jpg",
        genre_ids: [35, 10749],
        id: 1824,
        original_language: "en",
        original_title: "50 First Dates",
        overview:
          "Henry is a player skilled at seducing women. But when this veterinarian meets Lucy, a girl with a quirky problem when it comes to total recall, he realizes it's possible to fall in love all over again…and again, and again. That's because the delightful Lucy has no short-term memory, so Henry must woo her day after day until he finally sweeps her off her feet.",
        poster_path: "/vKKdsaq3OomDvFdpPpWVg0L6gB9.jpg",
        release_date: "2004-02-13",
        title: "50 First Dates",
        video: false,
        vote_average: 6.7,
        vote_count: 3987,
        popularity: 14.18
      }
    ],
    person_results: [{}],
    tv_results: [{}],
    tv_episode_results: [{}],
    tv_season_results: [{}]
  };

  const resultId = 1824;
  expect(pickId(mockData)).toEqual(resultId);
});

test("get youtube videos from TMDB get video api", () => {
  const mockData = {
    id: 1824,
    results: [
      {
        id: "533ec659c3a36854480009c3",
        iso_639_1: "en",
        iso_3166_1: "US",
        key: "ErjP5xMTc8I",
        name: "50 first dates Trailer",
        site: "YouTube",
        size: 360,
        type: "Trailer"
      },
      {
        id: "58b79ff9c3a368358d000f43",
        iso_639_1: "en",
        iso_3166_1: "US",
        key: "Vi1uewVWxos",
        name: "50 First Dates (2004) Trailer",
        site: "YouTube",
        size: 480,
        type: "Trailer"
      }
    ]
  };

  const result = [
    "https://www.youtube.com/watch?v=ErjP5xMTc8I",
    "https://www.youtube.com/watch?v=Vi1uewVWxos"
  ];
  expect(pickVideos(mockData)).toEqual(result);

  const mockEmptyData: { id: number; results: Array<{ key: string }> } = {
    id: 1824,
    results: []
  };

  expect(pickVideos(mockEmptyData)).toEqual([]);
});

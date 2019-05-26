import RequestPromise from "request-promise";
import { flatten, values, map, head, path, compose } from "ramda";
import Config from "../config";

/*
 * This function uses ramda compose to parse the Id from TMDB movie info
 * There are 5 keys in movie info result which always one one of them has the value
 * so we do flatten the json result and pick the first object and then the Id
 */
export const pickId = (data: { [key: string]: object[] }) =>
  compose<
    { [key: string]: object[] },
    object[][],
    object[],
    { id: string },
    number
  >(
    path(["id"]),
    head,
    flatten,
    values
  )(data);

/*
 * This function builds movie info URL
 */
export const buildMovieIdURL = (imdbId: string) =>
  `https://api.themoviedb.org/3/find/${imdbId}?api_key=${
    Config.TMDB_API_KEY
  }&language=en-US&external_source=imdb_id`;

/*
 * This function using imdb Id which got from ViaPlay service builds a URL agianst TMDB
 * fetch the data using request-promise and parse it to JSON
 * then extract TMDB movieId from result
 */
export const getMovieId = (imdbId: string) =>
  RequestPromise(buildMovieIdURL(imdbId))
    .then(JSON.parse)
    .then(pickId);

/*
 * This function uses ramda compose to parse the result from Videos api of TMDB
 * Then it will create youtube URLs and return it as final result
 */
export const pickVideos = (data: { results: Array<{ key: string }> }) =>
  compose<
    { results: Array<{ key: string }> },
    Array<{ key: string }>,
    string[]
  >(
    map(
      (videoData: { key: string }) =>
        `https://www.youtube.com/watch?v=${videoData.key}`
    ),
    path(["results"])
  )(data);

/*
 * This function builds movie videos info URL
 */
export const buildMovieVideosURL = (tmdbId: number) =>
  `https://api.themoviedb.org/3/movie/${tmdbId}/videos?api_key=${
    Config.TMDB_API_KEY
  }&language=en-US`;

/*
 * This function using TMDB Id which got in previous step
 * fetch the list of videos using request-promise and parse it to JSON
 * then extract youtube videos urls from data
 */
export const getMovieVideos = (tmdbId: number) =>
  RequestPromise(buildMovieVideosURL(tmdbId))
    .then(JSON.parse)
    .then(pickVideos);

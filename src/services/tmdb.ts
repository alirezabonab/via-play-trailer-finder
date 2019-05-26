import RequestPromise from "request-promise";
import { flatten, values, map, head, path, compose } from "ramda";
import Config from "../config";

export const pickId = (data: { [key: string]: Object[] }) =>
  compose<
    { [key: string]: Object[] },
    Object[][],
    Object[],
    { id: string },
    string
  >(
    path(["id"]),
    head,
    flatten,
    values
  )(data);

export const getMovieInfoURL = (imdbId: string) =>
  `https://api.themoviedb.org/3/find/${imdbId}?api_key=${
    Config.TMDB_API_KEY
  }&language=en-US&external_source=imdb_id`;

export const getMovieId = (imdbId: string) =>
  RequestPromise(getMovieInfoURL(imdbId))
    .then(JSON.parse)
    .then(pickId);

export const pickVideos = (data: { results: { key: string }[] }) =>
  compose<{ results: { key: string }[] }, { key: string }[], string[]>(
    map(
      (videoData: { key: string }) =>
        `https://www.youtube.com/watch?v=${videoData.key}`
    ),
    path(["results"])
  )(data);

export const getMovieVideosURL = (tmdbId: string) =>
  `https://api.themoviedb.org/3/movie/${tmdbId}/videos?api_key=${
    Config.TMDB_API_KEY
  }&language=en-US`;

export const getMovieVideos = (tmdbId: string) =>
  RequestPromise(getMovieVideosURL(tmdbId))
    .then(JSON.parse)
    .then(pickVideos);

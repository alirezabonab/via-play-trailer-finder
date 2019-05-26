import RequestPromise from "request-promise";
import { path } from "ramda";

/*
 * This function will use Ramda labrary to pick specific path in the result JSON blob
 * https://ramdajs.com/docs/#path
 */
export const pickIMDB = path([
  "_embedded",
  "viaplay:product",
  "content",
  "imdb"
]);


/*
 * This function will use request promise to get the movie info from ViaPlay api
 * The parameter (partial=true) will be added to the URL 
 * to only return specific movie instead of list of movies
 */
export const getMovieIMDB: (
  viaplayURL: string
) => any | Promise<{ id: string }> = (viaplayURL: string) =>
  RequestPromise(viaplayURL)
    .then(JSON.parse)
    .then(pickIMDB);

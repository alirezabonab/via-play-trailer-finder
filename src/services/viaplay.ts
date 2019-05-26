import RequestPromise from "request-promise";
import { path } from "ramda";

export const pickIMDB = path(["_embedded", "viaplay:product", "content", "imdb"]);

export const getMovieInfo: (viaplayURL: string) => any | Promise<{ id: string; url: string }> =
  (viaplayURL: string) =>
  RequestPromise(viaplayURL)
    .then(JSON.parse)
    .then(pickIMDB);

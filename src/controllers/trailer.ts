import { Request, Response } from "express";
import { ViaPlayService, TMDBService } from "../services";
import url from "url";

export const getTrailerByViaPlayURL = () => {
  return async (req: Request, res: Response) => {
    if (!req.body.movie_url) {
      return res
        .status(400)
        .json({ message: "bad request, movie_url required" });
    }

    const viaPlayMovieURL = new URL(req.body.movie_url);

    // To filter ViaPlay API to get only specific movie we use partial=true
    // this parameter cause the API return only the specific movie
    if (!viaPlayMovieURL.searchParams.has("partial")) {
      viaPlayMovieURL.searchParams.set("partial", "true");
    }

    try {
      // get movie IMDB data form ViaPlay API
      const viaPlayIMDB = await ViaPlayService.getMovieIMDB(
        viaPlayMovieURL.href
      );

      // get movie Id from TMDB movie info API
      const tmdbId = await TMDBService.getMovieId(viaPlayIMDB.id);

      // get movie videos info form TMDB movie videos API
      // and build the final youtube URLs list
      const tmdbVideoResult = await TMDBService.getMovieVideos(tmdbId);

      // return youtube URLS
      // if there is no videos an empty array will be passed to response
      return res.json({ result: tmdbVideoResult });
    } catch (e) {
      if (e.statusCode === 404) {
        return res
          .status(e.statusCode)
          .json({ error: true, message: "movie not found" });
      }

      return res.status(500).json({ error: true, message: JSON.stringify(e) });
    }
  };
};

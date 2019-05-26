import { Request, Response } from "express";
import { ViaPlayService, TMDBService } from "../services";

export const getTrailerByViaPlayURL = () => {
  return async (req: Request, res: Response) => {
    const result = await ViaPlayService.getMovieInfo(req.body.url);
    const tmdbId = await TMDBService.getMovieId(result.id);
    const tmdbVideoResult = await TMDBService.getMovieVideos(tmdbId);
    res.json(tmdbVideoResult);
  };
};

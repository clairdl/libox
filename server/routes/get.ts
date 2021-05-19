import express from 'express';

import { searchMovie } from '../tmdb/search/searchMovies';
import { getMovieDetails } from '../tmdb/movies/getMovieDetails';

const router = express.Router();

router.get('/search', (req, res) => {
  // Hacky solution for TS error
  const query = typeof req.query.query === 'string' ? req.query.query : undefined;

  searchMovie({ query, pageNumber: 1 })
    .then(({ data }) => {
      res.json(data)
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/movies/:id', (req, res) => {
  getMovieDetails({ id: parseInt(req.params.id, 10) })
    .then(({ data }) => {
      res.json(data)
    })
    .catch((err) => {
      console.log(err);
    });
});

export default router;
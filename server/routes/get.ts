import express from 'express';

import { searchMovie } from '../tmdb/search/searchMovies';
import { getMovieDetails } from '../tmdb/movies/getMovieDetails';
import { getMovieCredits } from '../tmdb/movies/getMovieCredits';

const router = express.Router();

router.get('/search', (req, res) => {
  const query = typeof req.query.query === 'string' ? req.query.query : undefined;

  searchMovie({ query, pageNumber: 1 })
    .then(({ data }) => {
      res.json(data)
    })
    .catch((err) => {
      console.log(err);
      res.send(err)
    });
});

router.get('/movie/:id', (req, res) => {
  getMovieDetails({ id: parseInt(req.params.id, 10) })
    .then(({ data }) => {
      res.json(data)
    })
    .catch((err) => {
      console.log(err);
      res.send(err)
    });
});

router.get('/movie/:id/credits', (req, res) => {
  getMovieCredits({ id: parseInt(req.params.id, 10) })
    .then(({ data }) => {
      res.json(data)
    })
    .catch((err) => {
      console.log(err);
      res.send(err)
    });
});

export default router;
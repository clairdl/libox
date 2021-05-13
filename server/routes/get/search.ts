import express from 'express';

import tmdb from '../../tmdb/search/searchMovie';

const router = express.Router();

router.get('/search', (req, res) => {
  // Hacky solution for TS error
  const query = typeof req.query.query === 'string' ? req.query.query : undefined;

  tmdb.searchMovie({ query, pageNumber: 1 })
    .then(({data}) => {
      // console.log(data);
      res.json(data)
    })
    .catch((err) => {
      console.log(err);
    });
});

export default router;

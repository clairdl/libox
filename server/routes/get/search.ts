import express from 'express';

import tmdb from '../../tmdb/search/searchMovie';

const router = express.Router();

router.get('/search', (req, res) => {
  console.log(req.query.query);

  // Typescript stuff
  const query = typeof req.query.query === 'string' ? req.query.query : undefined;

  tmdb.searchMovie({ query, pageNumber: 1 })
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err, 'wtf lol');
    });
});

export default router;

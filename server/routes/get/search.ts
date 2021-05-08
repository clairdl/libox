import express from 'express';

import tmdb from '../../tmdb/search/searchMovie';

const router = express.Router();

router.get('/search', async () => {
  const result = await tmdb.searchMovie({ query: 'star wars', pageNumber: 1 });

  console.log(result);
});

export default router;

import React from 'react';
import { Box, Image } from 'grommet';
import placeholderMoviePoster from '../../assets/placeholderMoviePoster.png';

type TablePosterProps = {
  path: null | string;
  size: 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original';
};

const TablePoster = ({ size, path }: TablePosterProps) => (
  <Box width={{ max: '100px' }}>
    <Image
      fallback={placeholderMoviePoster}
      src={`http://image.tmdb.org/t/p/${size}${path}`}
    />
  </Box>
);

export default TablePoster;

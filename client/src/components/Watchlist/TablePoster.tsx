import React from 'react';
import { Box, Image } from 'grommet';
import placeholderMoviePoster from '../../assets/placeholderMoviePoster.png';

type Props = {
  path: null | string;
  // unnecessary: 
  size: 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original';
};

const TablePoster = ({ size, path }: Props) => (
  <Box width={{ max: '100px' }}>
    <Image
      fallback={placeholderMoviePoster}
      src={`http://image.tmdb.org/t/p/${size}${path}`}
    />
  </Box>
);

export default TablePoster;

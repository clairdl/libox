/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Grid, Image, Stack } from 'grommet';
import { MovieDetailsDataResponse } from './types';
import HeaderButtons from './HeaderButtons';

import { LinkPrevious } from 'grommet-icons';
import FastAverageColor from 'fast-average-color';

interface Props {
  id: number;
}

const MovieDetails = (props: Props) => {
  const [mv, setMovieData] = useState({} as MovieDetailsDataResponse);
  const [col, setCol] = useState('rgba(255,255,255,1)');

  useEffect(() => {
    console.log(1);
    const fetchData = async () => {
      const result = await axios(`/movie/${props.id}`);
      setMovieData(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(2, mv);
    const fac = new FastAverageColor();
    fac
      .getColorAsync(`https://www.themoviedb.org/t/p/w300/${mv.backdrop_path}`)
      .then((color) => {
        console.log(color);
        setCol(color.rgba);
        // {
        //     rgb: 'rgb(255, 0, 0)',
        //     rgba: 'rgba(255, 0, 0, 1)',
        //     hex: '#ff0000',
        //     hexa: '#ff0000ff',
        //     value: [255, 0, 0, 255],
        //     isDark: true,
        //     isLight: false
        // }
      })
      .catch((e) => {
        console.error('fast-average-color err: ', e);
      });

    return () => {
      fac.destroy();
    };
  }, [mv]);
  console.log(col);

  return (
    <Box background={col}>
      <Button secondary alignSelf='start' icon={<LinkPrevious />} />
      <Box background={col}>
        
        <Box height='xlarge' width='xlarge' alignSelf='center' >
          <Stack alignSelf='center'>
              <Image
                fill={true}
                fit='contain'
                src={`https://www.themoviedb.org/t/p/original/${mv.backdrop_path}`}
              />
            <Box
              fill={true}
              background={`radial-gradient(circle, rgba(255,246,246,0) 70%, ${col} 85%)`}
            />
          </Stack>
        </Box>
      
      </Box>

      <Box background='dark-2'>Footer</Box>
    </Box>
  );
};

/*
<Image
              fit='cover'
              // opacity='medium'
              src={`https://www.themoviedb.org/t/p/original/${mv.backdrop_path}`}
            />
*/

export default MovieDetails;

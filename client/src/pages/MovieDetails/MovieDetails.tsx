// core libs
import { useState, useEffect } from 'react';
import axios from 'axios';
import FastAverageColor from 'fast-average-color';

// components
import BackdropImage from './BackdropImage';
import TitleText from './TitleText';
import RatingBtn from '../../components/generic/RatingBtn';
import RatingPanel from './RatingPanel';
import CastCrewDetailsTabs from './CastCrewDetailsTabs';
import AddToListButton from '../../components/generic/AddToListButton';
import Spinner from '../../components/generic/Spinner';
import { Box, Button, Image, Text } from 'grommet';
import { LinkPrevious } from 'grommet-icons';

// typescript
import { MovieDetailsData, MovieCreditsData } from './types';


interface Props {
  id: number;
}

const MovieDetails = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [mvD, setMovieDetails] = useState({} as MovieDetailsData);
  const [mvC, setMovieCredits] = useState({} as MovieCreditsData);

  const [dir, setDir] = useState('');
  const [col, setCol] = useState('rgba(0,0,0,0)');

  // data fetching & refining
  useEffect(() => {
    const fetchData = async () => {
      const resDetails = await axios(`/movie/${props.id}`);
      const resCredits = await axios(`/movie/${props.id}/credits`);
      setMovieDetails(resDetails.data);
      setMovieCredits(() => {
        setDir(
          resCredits.data.crew.find((el: any) => el.job === 'Director').name
        );
        return resCredits.data;
      });
    };
    fetchData();
  }, []);

  // get colour for backdrop
  useEffect(() => {
    const fac = new FastAverageColor();
    fac
      .getColorAsync(`https://www.themoviedb.org/t/p/w300/${mvD.backdrop_path}`)
      .then((res) => {
        setCol(res.rgba);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error('fast-average-color err: ', e);
      });
    return () => {
      fac.destroy();
    };
  }, [mvD]);

  let details = [
    { name: 'runtime', val: `${mvD.runtime}mins` },
    { name: 'revenue', val: `${mvD.revenue} USD` },
    { name: 'budget', val: `${mvD.budget} USD` },
  ];

  return (
    <>
      {isLoading ? (
        <Spinner size='large' />
      ) : (
        <Box
          pad={{ horizontal: '100px' }}
          background={{ color: 'accent-4' }}
          direction='row'
          justify='between'
        >
          <Box
            style={{ position: 'sticky', top: 0 }}
            height='medium'
            width='medium'
            direction='column'
            background={{ color: 'accent-2' }}
            margin={{ right: 'small' }}
          >
            <Button secondary alignSelf='start' icon={<LinkPrevious />} />
            <Image
              src={`https://www.themoviedb.org/t/p/original/${mvD.poster_path}`}
            />
            <RatingPanel
              voteCount={mvD.vote_count}
              voteScore={mvD.vote_average}
            />
          </Box>

          <Box background={col}>
            <Box width='xlarge'>
              <BackdropImage backdropPath={mvD.backdrop_path} col={col} />
            </Box>

            <Box margin={{ bottom: '600px' }} pad={{ horizontal: 'large' }}>
              <TitleText
                title={mvD.title}
                releaseDate={mvD.release_date}
                director={dir}
              />
              <Box border='top' />
              <Text
                margin={{ vertical: 'small' }}
                style={{ fontFamily: 'Mate SC' }}
              >
                {mvD.tagline?.toUpperCase()}
              </Text>
              <Text>{mvD.overview}</Text>
              <Box
                alignSelf='start'
                direction='row'
                pad={{ top: 'medium' }}
                gap='small'
              >
                <AddToListButton listId='watchlist' movieId={props.id} />
                <AddToListButton listId='watchedlist' movieId={props.id} />
                <RatingBtn id={props.id} />
              </Box>
              <CastCrewDetailsTabs
                cast={mvC.cast}
                crew={mvC.crew}
                details={details}
              />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default MovieDetails;

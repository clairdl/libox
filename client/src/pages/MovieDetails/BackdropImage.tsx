import { Box, Stack, Image } from 'grommet';

interface Props {
  backdropPath: string | null;
  col: string;
}

const BackdropImage = (props: Props) => {
  return (
    <div>
      <Stack alignSelf='center'>
        <Image
          fill={true}
          fit='contain'
          src={`https://www.themoviedb.org/t/p/original/${props.backdropPath}`}
        />
        <Box
          fill={true}
          background={`linear-gradient(0deg, rgba(0,0,0,0) 70%, ${props.col} 100%)`}
        />
        <Box
          fill={true}
          background={`linear-gradient(90deg, rgba(0,0,0,0) 70%, ${props.col} 100%)`}
        />
        <Box
          fill={true}
          background={`linear-gradient(180deg, rgba(0,0,0,0) 70%, ${props.col} 100%)`}
        />
        <Box
          fill={true}
          background={`linear-gradient(270deg, rgba(0,0,0,0) 70%, ${props.col} 100%)`}
        />
      </Stack>
    </div>
  );
};

export default BackdropImage;

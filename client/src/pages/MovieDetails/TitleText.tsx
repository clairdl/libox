import { Heading, Text, Box } from 'grommet';

interface Props {
  title: string;
  releaseDate: string;
  director: string;
}

const TitleText = (props: Props) => {
  return (
    <Box>
      <Heading
        style={{ fontFamily: 'Lora' }}
        margin={{ top: 'small', bottom: 'small' }}
      >
        {props.title}
        <Text
          size='xlarge'
          margin={{ left: 'medium' }}
          color='light-1'
        >{`${new Date(props.releaseDate).toLocaleDateString('en-US', {
          year: 'numeric',
        })}`}</Text>
      </Heading>
      <Box
        margin={{ bottom: 'small' }}
        direction='row'
        style={{ fontFamily: 'Lora' }}
      >
        <Text
          margin={{ right: 'small' }}
          alignSelf='end'
          size='xlarge'
          color='light-1'
        >
          {props.director},
        </Text>
        <Text alignSelf='end' size='medium' color='light-5'>
          Director
        </Text>
      </Box>
    </Box>
  );
};

export default TitleText;

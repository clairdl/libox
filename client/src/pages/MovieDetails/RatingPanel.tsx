import { Box, Stack, Text, Meter } from 'grommet';
import React from 'react';

interface Props {
  voteCount?: number;
  voteScore: number;
}

const RatingPanel = (props: Props) => {
  return (
    <Stack anchor='center'>
      <Box>
        <Meter
          alignSelf='center'
          type='circle'
          background='light-1'
          values={[{ value: props.voteScore * 10 }]}
          size='xsmall'
          thickness='small'
        />
      </Box>
      <Box direction='column' align='center' pad={{ bottom: 'xsmall' }}>
        <Text size='small'>TMDB</Text>
        <Text size='xlarge' weight='bold'>
          {props.voteScore * 10}
          <Text alignSelf='end' size='small' weight='normal'>
            /100
          </Text>
        </Text>
      </Box>
    </Stack>
  );
};

export default RatingPanel;

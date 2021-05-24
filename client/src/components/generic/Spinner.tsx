import { Box, Spinner, Text } from 'grommet';

const Simple = () => (
  <Box justify='center' direction='row' gap='small' pad={{ top: 'xlarge' }}>
    <Spinner />
    <Text size='large'>
      Searching the Jedi Archives...
    </Text>
  </Box>
);

export default Simple;

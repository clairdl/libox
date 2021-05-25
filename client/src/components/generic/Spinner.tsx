import { Box, Spinner, Text } from 'grommet';

interface Props {
  label?: string;
  size: string;
}

const Simple = (props: Props) => (
  <Box justify='center' direction='row' gap='small' pad={{ top: 'xlarge' }}>
    <Spinner size={props.size} />
    <Text size='large'>{props.label}</Text>
  </Box>
);

export default Simple;

import { Text } from 'grommet';

interface Props {
  label: string;
}

const ColumnHeader = (props: Props) => {
  return (
    <div>
      <Text weight='bold'>{props.label}</Text>
    </div>
  );
};

export default ColumnHeader;

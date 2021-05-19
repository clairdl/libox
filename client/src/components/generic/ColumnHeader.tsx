import React from 'react';
import { Text } from 'grommet';
interface Props {
  label: string;
}

const ColumnHeader = (props: Props) => {
  return (
    <div>
      <Text
        textAlign='start'
        alignSelf='start'
        margin={{ horizontal: 'large' }}
        weight='bold'
      >
        {props.label}
      </Text>
    </div>
  );
};

export default ColumnHeader;
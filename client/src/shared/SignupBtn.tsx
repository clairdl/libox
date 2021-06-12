import { useState } from 'react';

import { UserAdd, Close } from 'grommet-icons';

import { Box, Button, FormField, Heading, Layer, TextInput } from 'grommet';

const SignupBtn = () => {
  const [open, setOpen] = useState(false);
  // const [select, setSelect] = React.useState('');

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  const onSubmit = () => {
    onClose();
  };

  return (
    <Box>
      <Button icon={<UserAdd />} label='Sign up' onClick={onOpen} />
      {open && (
        <Layer
          position='right'
          full='vertical'
          modal
          onClickOutside={onClose}
          onEsc={onClose}
        >
          <Box
            as='form'
            overflow='auto'
            width='medium'
            pad='medium'
            onSubmit={onClose}
          >
            <Box flex={false} direction='row' justify='between'>
              <Heading level={2} margin='none'>
                Sign up
              </Heading>
              <Button icon={<Close />} onClick={onClose} />
            </Box>
            <Box flex='grow' overflow='auto' pad={{ vertical: 'medium' }}>
              <FormField label='username'>
                <TextInput />
              </FormField>
              <FormField label='password'>
                <TextInput type='password' />
              </FormField>
              <FormField label='confirm password'>
                <TextInput type='password' />
              </FormField>
            </Box>
            <Box flex={false} as='footer' align='start'>
              <Button type='submit' label='Submit' onClick={onSubmit} primary />
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  );
};

export default SignupBtn;

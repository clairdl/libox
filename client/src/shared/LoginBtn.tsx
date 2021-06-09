/* eslint-disable no-unused-vars */

import React from 'react';

import { Login, Close } from 'grommet-icons';

import {
  Box,
  Button,
  FormField,
  Heading,
  Layer,
  Select,
  TextArea,
  TextInput,
} from 'grommet';

const LoginBtn = () => {
  const [open, setOpen] = React.useState(false);
  const [select, setSelect] = React.useState('');

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  return (
    <Box fill>
      <Button icon={<Login />} label='Log in' onClick={onOpen} />
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
                Login
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
            </Box>
            <Box flex={false} as='footer' align='start'>
              <Button type='submit' label='Submit' onClick={onClose} primary />
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  );
};

export default LoginBtn;

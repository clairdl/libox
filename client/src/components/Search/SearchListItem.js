/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Paragraph,
  Text,
  Grid,
} from 'grommet';

import { FormAdd, ShareOption } from 'grommet-icons';

const SearchListItem = (props) => {
  const { title, desc, poster, date } = props;
  return (
    <Box pad='medium' align='start'>
      <Card elevation='medium'>
        <Box direction='row' pad={{ right: 'medium' }}>
          <CardBody pad={{ right: 'medium' }}>
            <Image
              fit='cover'
              src={`http://image.tmdb.org/t/p/w185/${poster}`}
              a11yTitle={`${title} poster`}
            />
          </CardBody>
          <Box direction='column'>
            <Box direction='row'>
              <Heading
                level='3'
                size='small'
                alignSelf='end'
                margin={{ bottom: 'none' }}
              >
                {title}
              </Heading>
              <Text alignSelf='end' color='dark-4' margin={{ left: 'small' }}>
                {date ? date.slice(0, 4) : null}
              </Text>
            </Box>
            <Grid border='top' margin={{ vertical: 'xsmall' }} />
            <Paragraph size='small' margin={{ top: 'none' }}>
              {desc}
            </Paragraph>
            <CardFooter
              direction='row'
              justify='between'
              align='end'
              flex='grow'
              margin={{ bottom: 'small' }}
            >
              <Button
                icon={<FormAdd />}
                hoverIndicator
                size='small'
                label='watchlist'
              />
              <Button icon={<ShareOption color='plain' />} hoverIndicator />
            </CardFooter>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

SearchListItem.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default SearchListItem;

import axios from 'axios';
import * as action from './types';

// eslint-disable-next-line import/prefer-default-export
export const searchAPI = (query) => (dispatch) => {
  axios
    .get(`/search`, {
      params: { query },
    })
    .then((response) => {
      dispatch({
        type: action.SEARCH_API,
        payload: response,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

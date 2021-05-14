import * as actions from '../actions/types';

const initialState = {
  searchData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SEARCH_API:
      return {
        ...state,
        searchData: action.payload,
      };
    default:
      return state;
  }
}

import {
  GET_ARTICLES
} from '../actions/actionTypes';

initialState = {
  articles: []
}

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return { ...state, articles: action.payload.articles }
    default:
      return state;
  }
}

export default articleReducer;

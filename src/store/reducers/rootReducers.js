import { GET_POSTS, GET_SINGLE_POST, UPDATE_SEARCH_DATA, CREATE_COMMENT } from '../actionTypes';

const initialState = {
  posts: [],
  currentPost: null,
  searchData: '',
  comment: []
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS: {
      return { ...state, posts: payload };
    }
    case GET_SINGLE_POST: {
      return {...state, currentPost: payload}
    }
    case UPDATE_SEARCH_DATA: {
      return {...state, searchData: payload}
    }
    case CREATE_COMMENT : {
      return {...state, comment: payload}
    }
    default: {
      return { ...state };
    }
  }
};

export default rootReducer;

import { combineReducers } from 'redux';

function articles(state = [], action) {
  switch (action.type) {
    case 'SET_ARTICLES': {
      return action.newArticles;
    }
    default: {
      return state;
    }
  }
}

function detailedArticle(state = null, action) {
  switch (action.type) {
    case 'SET_DETAILED_ARTICLE': {
      return action.detailedArticle;
    }
    default: {
      return state;
    }
  }
}

function fetchingArticle(state = false, action) {
  switch (action.type) {
    case 'SET_FETCHING_ARTICLE': {
      return action.fetchingArticle;
    }
    default: {
      return state;
    }
  }
}

const reducers = combineReducers({
  articles,
  detailedArticle,
  fetchingArticle,
});

export default reducers;

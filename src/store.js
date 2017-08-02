import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {
  articles: [],
  detailedArticle: null,
  fetchingArticle: false,
};

const store = createStore(reducers, initialState);

export default store;

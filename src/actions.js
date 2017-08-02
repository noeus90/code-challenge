
function setArticles(articles) {
  return { type: 'SET_ARTICLES', newArticles: articles };
}

function setDetailArticle(article) {
  return { type: 'SET_DETAILED_ARTICLE', detailedArticle: article };
}

function setFetchingArticle(newValue) {
  return { type: 'SET_FETCHING_ARTICLE', fetchingArticle: newValue };
}

export { setArticles, setDetailArticle, setFetchingArticle };

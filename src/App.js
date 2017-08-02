import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import request from './request';
import { ARTICLES_QUERY } from './queries';
import Card from './Card';
import { setArticles } from './actions';

class App extends Component {

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.props.dispatch(setArticles(response.data.articles));
    });
  }

  // Renders
  render() {
    const articleCards = this.props.articles.map(article =>
      <Card key={article.id} article={article} />);

    return (
      <div className="App">
        <header className="header">
          <h2>Billin code challenge</h2>
        </header>
        <div className="cards-container">
          {articleCards}
        </div>
        <footer className="footer">
          <small>Copiright Billin 2017</small>
        </footer>
      </div>
    );
  }
}

App.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    articles: state.articles || [],
  };
}

export default connect(mapStateToProps)(App);

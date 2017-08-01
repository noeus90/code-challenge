import React, { Component } from 'react';
import request from './request';
import { ARTICLES_QUERY } from './queries';
import Card from './Card';

class App extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  // Renders
  render() {
    const articleCards = this.state.articles.map(article =>
      <Card key={article.id} article={article} />);
    return (
      <div className="App">
        <header>
          <h2>Billin code challenge</h2>
        </header>
        <div className="cards-container">
          {articleCards}
        </div>
        <footer>
          <small>Copiright Billin 2017</small>
        </footer>
      </div>
    );
  }
}

export default App;

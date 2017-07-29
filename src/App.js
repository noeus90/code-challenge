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
        <h2>Billin code challenge</h2>
        {articleCards}
      </div>
    );
  }
}

export default App;

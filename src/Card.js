import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {

  redirectToCard = () => {
    window.location.href = this.props.article.id;
  }

  render() {
    return (
      <div className="article-card" onClick={this.redirectToCard}>
        <span className="title">{this.props.article.title}</span>
        <span className="author">{this.props.article.author}</span>
        <span className="excerpt">{this.props.article.excerpt}</span>
      </div>
    );
  }
}

Card.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;

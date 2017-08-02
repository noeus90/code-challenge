import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import request from './request';
import { singleArticleQuery } from './queries';
import { setDetailArticle, setFetchingArticle } from './actions';

class DetailedCard extends Component {

  // lifecycle
  componentWillMount() {
    this.props.dispatch(setFetchingArticle(true));
    request(singleArticleQuery(this.props.id)).then(response => {
      this.props.dispatch(setDetailArticle(response.data.single));
      this.props.dispatch(setFetchingArticle(false));
    })
    .catch(() => this.props.dispatch(setFetchingArticle(false)));
  }

  render() {
    if (this.props.fetchingArticle) {
      return (
        <div />
      );
    }
    if (this.props.article) {
      const published = this.props.article.published ? 'Published' : 'Not yet published';
      return (
        <div className="detailed-card">
          <span className="title">{this.props.article.title}</span>
          <span className="author">{this.props.article.author}</span>
          <span className="published">{published}</span>
          <span className="content">{this.props.article.content}</span>
          <ul>
            {this.props.article.tags.map(tag => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
      );
    }
    return (
      <div className="article-card">
        <span className="title">invalid article id {this.props.id}</span>
      </div>
    );
  }
}

DetailedCard.propTypes = {
  article: PropTypes.shape({
    content: PropTypes.string.isRequired,
    published: PropTypes.bool.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),
  dispatch: PropTypes.func.isRequired,
  fetchingArticle: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    article: state.detailedArticle,
    fetchingArticle: state.fetchingArticle,
    id: ownProps.params.id || 'no definido',
  };
}

export default connect(mapStateToProps)(DetailedCard);

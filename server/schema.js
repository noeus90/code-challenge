import { buildSchema } from 'graphql';

const Schema = buildSchema(`
  type Article {
    author: String,
    content: String,
    excerpt: String,
    id: String,
    published: Boolean,
    tags: [String],
    title: String
  }
  type Query {
    articles: [Article],
    single(id: String): Article
  }
`);

export default Schema;

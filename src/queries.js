export const ARTICLES_QUERY = `{
  articles {
    author
    excerpt
    id
    title
  }
}`;

export const singleArticleQuery = id => `{
  single(id: "${id}") {
    author
    content
    published
    tags
    title
  }
}`;

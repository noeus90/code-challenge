import Express from 'express';
import GraphHTTP from 'express-graphql';
import bodyParser from 'body-parser';
import Schema from './schema';

import db from './db';

const APP_PORT = 4000;

const app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.end();
  }
  next();
});

const root = {
  articles: () => {
    return db.Article.find();
  },
  single: function({ id }) {
    return db.Article.findOne({ _id : id });
  },
};

app.use('/graphql', GraphHTTP({
  schema: Schema,
  graphiql: true,
  pretty: true,
  rootValue: root,
}));

app.listen(APP_PORT, () => {
  console.log(`App listening on port ${APP_PORT}`); // eslint-disable-line no-console
});

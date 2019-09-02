const Koa = require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const schema = require('./graphql/schema');
const initDatabase = require('./database/database');

const app = new Koa();

initDatabase();

app.use(mount('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
})));

app.listen(9000);

app.on('error', err => {
    log.error('server error', err);
});


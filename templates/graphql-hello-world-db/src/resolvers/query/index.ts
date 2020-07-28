import GMR from 'graphql-merge-resolvers';
import queryHelloResolvers from './hello';
import queryTodosResolvers from './todos';

const queryResolvers = GMR.merge([
    queryHelloResolvers,
    queryTodosResolvers
]);

export default queryResolvers;
import GMR from 'graphql-merge-resolvers';
import resolversTodosMutation from './todos';

const mutationResolvers = GMR.merge([
    resolversTodosMutation
]);

export default mutationResolvers;
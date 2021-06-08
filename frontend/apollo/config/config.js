import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import introspectionResult from '~/fragmentTypes.json'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: introspectionResult
})

export default ({ req, app }) => {
  return {
    httpEndpoint: process.env.BACKEND_URL || 'http://jwwg.l.dedikuoti.lt/admin/api/graphql',
    cache: new InMemoryCache({ fragmentMatcher })
  }
}

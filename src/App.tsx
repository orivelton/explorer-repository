import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { GET_REPO } from './graphql/query'

function App() {
  const { loading, error, data } = useQuery(GET_REPO)

  // console.log("data", data);
  return <div className='App'>Hi</div>
}

export default App

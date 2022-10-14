import { ApolloProvider } from '@apollo/client'
import './App.css'
import client from './client'
import Continents from './Continents'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Continents />
      </div>
    </ApolloProvider>
  )
}

export default App

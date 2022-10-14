import { gql, useQuery } from '@apollo/client'
const GET_COUNTRY = gql`
  query Continent($code: ID!) {
    continent(code: $code) {
      countries {
        name
        emoji
      }
    }
  }
`
const Country = ({ code }) => {
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code }
  })

  if (loading) return 'Loading...'
  if (error) return <pre>{error.message}</pre>
  return (
    <>
      {data.continent.countries.map(country => {
        return <p>{country.name} {country.emoji}</p>
      })}
    </>
  )
}

export default Country

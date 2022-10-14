import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'
import Country from './Country'

const GET_CONTINENTS = gql`
  query Continents {
    continents {
      code
      name
    }
  }
`

const Continents = () => {
  const [contSelected, SetCount] = useState('')

  function onCountSelect(e) {
    SetCount(e.target.value)
  }

  const { loading, error, data } = new useQuery(GET_CONTINENTS)
  if (loading) return 'loading...'
  if (error) return <pre>{error.message}</pre>
  return (
    <>
      <h1>Select a Continent to get all Countries</h1>
      <select name="continent" onChange={onCountSelect}>
        <option value="" selected>
          Select...
        </option>
        {data.continents.map(continent => {
          return (
            <>
              <option key={continent.code} value={continent.code}>
                {continent.name}
              </option>
            </>
          )
        })}
      </select>
      {contSelected && <Country code={contSelected} />}
    </>
  )
}

export default Continents

import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'
import Country from './Country'
import {
  FormControl,
  Grid,
  InputLabel,
  TextField,
  Typography
} from '@mui/material'

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
      <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
        <FormControl size="medium">
          <TextField
            id="standard-select-currency-native"
            select
            label="Components"
            onChange={onCountSelect}
            size="small"
            SelectProps={{
              native: true
            }}
            helperText="Select a Component..."
          >
            <option value="" selected></option>
            {data.continents.map(continent => {
              return (
                <>
                  <option key={continent.code} value={continent.code}>
                    {continent.name}
                  </option>
                </>
              )
            })}
          </TextField>
        </FormControl>
      </Grid>
      {contSelected && <Country code={contSelected} />}
    </>
  )
}

export default Continents

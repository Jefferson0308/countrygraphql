import { gql, useQuery } from '@apollo/client'
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid
} from '@mui/material'
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
        return (
          <Grid item xs={4} md={2} lg={1}>
            <Card
              variant="elevation"
              sx={{
                maxWidth: 100,
                minWidth: 100,
                textAlign: 'center',
                height: 130
              }}
            >
              <CardHeader
                sx={{ p: 1, backgroundColor: 'lightgreen' }}
                avatar={
                  <Avatar sx={{ backgroundColor: 'white' }}>
                    {country.emoji}
                  </Avatar>
                }
              />
              <CardContent sx={{ p: 0 }}>
                <Typography variant="body2">{country.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        )
      })}
    </>
  )
}

export default Country

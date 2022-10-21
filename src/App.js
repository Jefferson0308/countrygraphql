import { ApolloProvider } from '@apollo/client'
import {
  Typography,
  Grid,
  MenuList,
  MenuItem,
  ListItemText,
  Link
} from '@mui/material'
import './App.css'
import client from './client'
import Continents from './Continents'

function App() {
  return (
    <ApolloProvider client={client}>
      <Grid
        container
        direction="column"
        spacing={1}
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: 'green', p: 2 }}
      >
        <Grid item xs={12} md={12}>
          <Typography variant="h4" color="white">
            Select a Continent to get all Countries
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justifyContent="start"
      >
        <Grid
          item
          xs={3}
          sm={3}
          md={2}
          lg={1}
          sx={{ backgroundColor: 'lightgreen', minHeight: '100vh' }}
        >
          <MenuList>
            <MenuItem>
              <ListItemText>
                <Link href="#">
                  <Typography variant="link">Countries</Typography>
                </Link>
              </ListItemText>
            </MenuItem>
            <MenuItem>
              <Link href="#">
                <Typography variant="link">Components</Typography>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="#">
                <Typography variant="link">Search</Typography>
              </Link>
            </MenuItem>
          </MenuList>
        </Grid>
        <Grid item xs={8} md={10} lg={11} sx={{ pt: 2, pl: 3 }}>
          <Grid container spacing={1} pl pr>
            <Continents />
          </Grid>
        </Grid>
      </Grid>
    </ApolloProvider>
  )
}

export default App

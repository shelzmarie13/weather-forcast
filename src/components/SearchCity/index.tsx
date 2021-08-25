import React, { useState } from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { StyledPaper, StyledTextField } from './style'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import { getSuggestedPlaces } from '@api/weatherService'

interface Place {
  name: string
}

const SearchCity: React.FC = () => {
  const [places, setPlaces] = useState<Place[]>([])

  const getPlaces = async (input?: string) => {
    const trimmedInput = input?.trim()
    if (trimmedInput && trimmedInput.length > 2){
      const response = await getSuggestedPlaces(trimmedInput)
      setPlaces(response.data)
    } else {
      setPlaces([])
    }
  }

  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item xs={12}>
          <StyledPaper elevation={0}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={places}
              getOptionLabel={(option) => option.name}
              renderOption={(option) => <>{option.name}</>}
              filterOptions={(options) => options}
              renderInput={(params) => (
                <StyledTextField
                  {...params}
                  label="Search City"
                  variant="outlined"
                  size="medium"
                  placeholder="Enter a city to view a 3-day forecast"
                  onChange={(event) => {
                    getPlaces(event.target.value)
                  }}
                />
              )}
            />
          </StyledPaper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SearchCity

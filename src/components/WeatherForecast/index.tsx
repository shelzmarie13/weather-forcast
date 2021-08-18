import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Container } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

const WeatherForecast: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="primary">
                Sample Card
              </Typography>
              <Divider />
              <br />
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet quam at sem fringilla
                tincidunt. Ut lobortis ac erat quis facilisis.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} spacing={1}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="primary">
                Sample Card
              </Typography>
              <Divider />
              <br />
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet quam at sem fringilla
                tincidunt. Ut lobortis ac erat quis facilisis.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} spacing={1}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="primary">
                Sample Card
              </Typography>
              <Divider />
              <br />
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet quam at sem fringilla
                tincidunt. Ut lobortis ac erat quis facilisis.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default WeatherForecast

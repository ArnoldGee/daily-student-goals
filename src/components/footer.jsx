import React from 'react'
import {Grid, Container, Icon} from 'semantic-ui-react'

export default function Footer() {
  return (
    <div>
      <Grid centered columns={2} 
        style={{
          marginTop: "20%"
}}
      >
        <Grid.Column>
          <Container textAlign="right">
            <Icon name="github"></Icon>
          </Container>
        </Grid.Column>
        <Grid.Column>
          <Icon name="linkedin"></Icon>
        </Grid.Column>
        <Grid.Column>
          <Container textAlign="center">
          Made by Arnau Gómez
          </Container>
        </Grid.Column>
      </Grid>
    </div>
  )
}

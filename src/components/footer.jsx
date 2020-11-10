import React from 'react';
import {Grid, Container, Icon} from 'semantic-ui-react';

export default function Footer() {
  return (
    <div>
      <Grid
        centered
        columns={2}
        style={{
          marginTop: '20%',
        }}
      >
        <Grid.Column style={{textAlign: 'right'}}>
          <a
            href="https://github.com/ArnoldGee/daily-student-goals"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon link name="github"></Icon>
          </a>
        </Grid.Column>
        <Grid.Column>
          <a
            href="https://www.linkedin.com/in/arnau-g%C3%B3mez-903b49187/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon link name="linkedin"></Icon>
          </a>
        </Grid.Column>
        <Grid.Column>
          <Container textAlign="center">Made by Arnau Gómez</Container>
        </Grid.Column>
      </Grid>
    </div>
  );
}

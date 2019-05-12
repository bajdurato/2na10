import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {AppBar} from 'material-ui';
import {Grid} from '@material-ui/core';


class MovieBrowser extends React.Component {
  render() {
    return (
      <div>
        <AppBar title='Movie Browser' />
        <Grid>
          <Row>
            <p>Search will go here</p>
          </Row>
          <Row>
            <p>Movie list will go here</p>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default MovieBrowser;
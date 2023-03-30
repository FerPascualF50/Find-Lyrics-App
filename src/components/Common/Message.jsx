import { Grid, Paper } from '@mui/material';
import React, { Fragment } from 'react'

const Message = ({ text }) => (
  <Fragment>
    <Paper>
      <Grid>
        <h2>{text}</h2>
      </Grid>
    </Paper>
  </Fragment>
)

export default Message;

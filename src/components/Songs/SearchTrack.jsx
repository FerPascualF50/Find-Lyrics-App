import React, { Fragment } from 'react';
import { Paper, TextField, IconButton } from '@mui/material'
import YoutubeSearchedForRoundedIcon from '@mui/icons-material/YoutubeSearchedForRounded';

const SearchTrack = ({ validateQTrack }) => {
  return (
    <Fragment>
      <Paper
        direction="row"
        align='center'
      >
        <TextField
          id='q_track'
          label='Track'
          margin='normal'
          variant='outlined'
          onKeyPress={e => validateQTrack(e)}
        />
        <IconButton onClick={(e) => validateQTrack(e)}>
          <YoutubeSearchedForRoundedIcon />
        </IconButton>
      </Paper>
    </Fragment>
  );
};

export default SearchTrack;

import React from 'react';
//import { Grid, Paper } from '@mui/material';
import { Card, CardContent, Typography } from '@mui/material';
import MusicNote from '@mui/icons-material/MusicNote';
import AlbumIcon from '@mui/icons-material/Album';
import ButtonPrimary from '../Common/ButtonPrimary';

const Track = ({ commontrack_id, track_name, album_name, artist_name }) => (
  <Card sx={{ maxWidth: 270 }} >
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {artist_name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <MusicNote /> Track: <b>{track_name}<br></br></b>
        <AlbumIcon /> Album: <b>{album_name}<br></br></b>
      </Typography>
      <ButtonPrimary type='lyrics' to={`/lyrics/track/${commontrack_id}`} />
    </CardContent>
  </Card>





  // <Fragment>
  //   <Grid>
  //     <Paper>
  //     <Fragment>
  //       <h3>{artist_name}</h3>
  //     </Fragment>
  //     <Fragment>
  //         <MusicNote />
  //         <strong>Track: </strong>{track_name}
  //     </Fragment>
  //     <Fragment>
  //         <AlbumIcon />
  //         <strong>Albun: </strong>{album_name}
  //     </Fragment>
  //           <ButtonPrimary type='lyrics' to={`/lyrics/track/${commontrack_id}`} />
  //     </Paper>
  //   </Grid>
  // </Fragment>
);

export default Track;
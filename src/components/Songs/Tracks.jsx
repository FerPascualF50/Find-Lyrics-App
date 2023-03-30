import React, { Fragment } from 'react';
import { Box } from '@mui/material';
import Track from './Track';
import Message from '../Common/Message';

const Tracks = ({ tracks, text }) => (
  //<Message text={text} />
  <Fragment>
    <Box>
    <Message text={text} />
    </Box>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > :not(style)': {
          m: 1,
          width: 300,
          height: 250,
          align: 'center'
        },
      }}
    >
      {
        tracks.map(track => {
          const {
            commontrack_id,
            track_name,
            album_name,
            artist_name
          } = track.track

          return (

            <Track
              key={commontrack_id}
              commontrack_id={commontrack_id}
              track_name={track_name}
              album_name={album_name}
              artist_name={artist_name}

            />
          )
        })
      }

    </Box>

  </Fragment>


  //   <Message text={text} />


  // <Fragment>
  //   <Message text={text} />
  //   <Fragment>
  //     <Grid  justifySelf='center'  >
  //       {
  //         tracks.map(track => {
  //           const {
  //             commontrack_id,
  //             track_name,
  //             album_name,
  //             artist_name
  //           } = track.track

  //           return (
  //             <Track
  //               key={commontrack_id}
  //               commontrack_id={commontrack_id}
  //               track_name={track_name}
  //               album_name={album_name}
  //               artist_name={artist_name}

  //             />
  //           )
  //         })
  //       }
  //     </Grid>
  //   </Fragment>
  // </Fragment>


)

export default Tracks;

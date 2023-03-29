import React, { Fragment, useContext } from 'react';
import {SongsContext} from '../../contexts/SongsContext';
import SearchTrack from './SearchTrack';
import Tracks from './Tracks';
import ProgressBar from '../Common/ProgressBar';
import Message from '../Common/Message';

const Songs = () => {
  const { validateQTrack, doneFetch, tracks, text } = useContext(SongsContext);

  return (
    <Fragment>
      <SearchTrack validateQTrack={validateQTrack} />
      {doneFetch ? (
        tracks.length ? (
          <Tracks text={text} tracks={tracks} />
          ) : (
            <Message text={`No se encontraron resultados para "${text}"`} />
            )
            ) : (
              <ProgressBar />
              )}
    </Fragment>
  );
};

export default Songs;










// import React, { Fragment, useContext } from 'react';
// import { SongsContext } from './../../contexts/SongsContext';
// import SearchTracks from './SearchTrack';
// import Tracks from './Tracks';
// import ProgressBar from './../Common/ProgressBar';
// import Message from './../Common/Message';

// export const Songs = () => {
//   const { validateQTrack, doneFetch, tracks, text } = useContext(SongsContext);
//   return (
//     <Fragment>
//       <SearchTracks validateQTrack={validateQTrack} />
//       {doneFetch ? (
//         tracks.length ? (
//           <Tracks text={text} tracks={tracks} />
//         ) : (
//           <Message text={text} />
//         )
//       ) : (
//         <ProgressBar />
//       )}
//     </Fragment>
//   );


// };

// export default Songs;

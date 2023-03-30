
import React, { createContext, useState, useEffect } from 'react';
import { chartTrackGet, trackSearch } from '../constants';



export const SongsContext = createContext();

const SongContextProvider = ({children}) => {
  const [doneFetch, setDoneFetch] = useState(false);
  const [currentQTrack, setCurrentQTrack] = useState('');
  const [text, setText] = useState('Top Argentina Songs');
  const [tracks, setTracks] = useState([]);

  useEffect(() => getTopTracks(), [])

  const getTopTracks = () => {
    fetch(chartTrackGet())
      .then(res => res.json())
      .then(data => {
        setDoneFetch(true)
        setTracks(data.message.body.track_list)
      })
      .catch(err => console.log(err.message))
  }

  const getTrack = q_track => {
    fetch(trackSearch(q_track))
      .then(res => res.json())
      .then(data => {
        const { track_list } = data.message.body
        setDoneFetch(true)
        setText(track_list.length ? 'Results' : 'Results not found');
        setTracks(track_list);
      })
      .catch(err => console.log(err.message))
  }

  const validateQTrack = (e,
    q_track = document.querySelector('#q_track').value.toLowerCase().trim()
  ) => {
    if (e.type === 'keypress' && e.key !== 'Enter') return;
    const words = q_track.match(/\w+/g);
    q_track = words && words.join(' ')
    if (q_track && q_track !== currentQTrack) {
      setCurrentQTrack(q_track);
      setDoneFetch(false);
      getTrack(q_track);
    }
  }
  return (
    <SongsContext.Provider value={{doneFetch, text, tracks, validateQTrack} }>
      {children}
    </SongsContext.Provider>
  );
};

export default SongContextProvider

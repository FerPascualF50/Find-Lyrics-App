import React, { createContext, useState, useEffect } from 'react';
import { trackLyricsGet, trackGet } from '../constants';

export const LyricsContext = createContext()


const LyricsContextProvider = ({ children }) => {
  const commontrack_id = window.location.pathname.slice('/')[3];
  const [doneFetchTrack, setDoneFetchTrack] = useState(false);
  const [doneFetchLyrics, setDoneFetchLyrics] = useState(false);
  const [track, setTrack] = useState([]);
  const [lyrics, setLyrics] = useState([]);

  useEffect(() => getTracks(commontrack_id), [commontrack_id])
  useEffect(() => getLyrics(commontrack_id), [commontrack_id])

  const getTracks = commontrack_id => {
    fetch(trackGet(commontrack_id))
      .then(res => res.json())
      .then(data => {
        const { body } = data.message;
        setDoneFetchTrack(true)
        !Array.isArray(body) && setTrack(body.track)
      })
      .catch(err => console.log(err.message))
  }

  const getLyrics = commontrack_id => {
    fetch(trackLyricsGet(commontrack_id))
      .then(res => res.json())
      .then(data => {
        const { body } = data.message;
        setDoneFetchLyrics(true)
        !Array.isArray(body) && setLyrics(body.lyrics.lyrics_body)
      })
      .catch(err => console.log(err.message))
  };
  return (
    <LyricsContext.Provider
     value={{ doneFetchTrack, doneFetchLyrics, track, lyrics }}
     >
      {children}
    </LyricsContext.Provider>


  );
};




export default LyricsContextProvider;
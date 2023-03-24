import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
//import lyrics from './../../assets/lyrics.png';
//import back from './../../assets/back.png';



const ButtonPrimary = ({ type, to }) => (
  <Link to={to}>
    <Button variant='contained' color='primary'>
      {type === 'lyrics' ? 'Lyrics' : 'Go Back'}
    </Button>
  </Link>

);

export default ButtonPrimary;
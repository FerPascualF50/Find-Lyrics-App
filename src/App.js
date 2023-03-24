import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SongsContextProvider from './contexts/SongsContext';
import LyricsContextProvider from './contexts/LyricsContext';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import Songs from './components/Songs';
import Lyrics from './components/Lirycs';
import NotFound from './components/NotFound/NotFound';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/'>
          <SongsContextProvider>
            <Songs />
          </SongsContextProvider>
        </Route>
        <Route path='/lyrics/track/:commontrack_id'>
          <LyricsContextProvider>
            <Lyrics />
          </LyricsContextProvider>
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>

  );
};

export default App;

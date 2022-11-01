import * as React from 'react';
import './App.css';
import Header from './Header';
import Profile from './Profile';
import Links from './Links';
import Footer from './Footer';
import SlackGitIcons from './SlackGitIcons';
import Horizontal from './Horizontal';


function App() {

  return (
    <div>
      <Header />
      <Profile />
      <Links />
      <SlackGitIcons />
      <Horizontal />
      <Footer />
    </div>
  );
}

export default App;

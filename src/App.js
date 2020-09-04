import React from 'react';

import RootRouter from './routers/RootRouter';
import NavBar from './ui/NavBar';
import Footer from './ui/Footer';
import JoinToClub from './ui/JoinToClub';

function App() {
  return (
    <div className="App">
      <NavBar />
      <RootRouter />
      <JoinToClub />
      <Footer />
    </div>
  );
}

export default App;

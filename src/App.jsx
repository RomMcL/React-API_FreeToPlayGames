import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Header from './components/views/global/Header';
import ListPage from './components/pages/ListPage';
import GamePage from './components/pages/GamePage';
import AboutPage from './components/pages/AboutPage';
import Footer from './components/views/global/Footer';


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route
          path={'/main'}
          element={<ListPage />}          
        />
        <Route
          path={'/game'}
          element={<GamePage />}
        />
        <Route
          path={'/about'}
          element={<AboutPage />}
        />
        <Route
          path={'*'}
          element={<ListPage />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App;

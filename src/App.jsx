import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useUpdateEffect } from './custom-hooks/custom-hook-lib';

import Header from './components/views/global/Header';
import ListPage from './components/pages/ListPage';
import GamePage from './components/pages/GamePage';
import AboutPage from './components/pages/AboutPage';
import Footer from './components/views/global/Footer';

import { message } from 'antd';

import { abortSleep } from './services/abortController';

import '@ant-design/v5-patch-for-react-19';

function App() {

  const location = useLocation();
  const mess = useSelector(state => state.dataSlice.message);

  useUpdateEffect(() => {
    abortSleep();
  }, [location]);

  useUpdateEffect(() => {
    mess && message.warning(mess);
  }, [mess]);


  return (
    <>
      <Header />
      <Routes>
        <Route
          path={'/main'}
          element={<ListPage />}          
        />
        <Route
          path={'/game/:gameID'}
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

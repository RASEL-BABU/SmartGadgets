import React from 'react';
import Home from './components/Home';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div>
    <Header></Header>
   <div className='md:min-h-[calc(100vh-341px)]'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  );
};

export default App;
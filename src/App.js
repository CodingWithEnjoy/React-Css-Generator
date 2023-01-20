import React from 'react'
import { useRoutes } from 'react-router-dom';
import MainContextProvider from './components/Context/MainContextProvider';
import Header from './components/Header/Header/Header';
import MenuBar from './components/MenuBar/MenuBar';
import Author from './components/Author/Author';
import router from './routes';
import { AnimatePresence } from 'framer-motion';


function App() {
  let routes = useRoutes(router)

  return (
    <>
    <MainContextProvider>
      <AnimatePresence>
        <Header />
        <div className='container_App'>
          <MenuBar />
          {routes}  
        </div>
        <Author />
      </AnimatePresence>
    </MainContextProvider>
    </>
  );
}

export default App;

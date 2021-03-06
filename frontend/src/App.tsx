import { Box } from '@material-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//import './App.css';
import { Navbar } from './components/Navbar';
import { Page } from './Page';
import AppRouter from './routes/AppRouter';
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>  {/*Tipo de roteamento,  */}
        <Navbar />
        <Box paddingTop={'70px'}>
          <AppRouter />
        </Box>

      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

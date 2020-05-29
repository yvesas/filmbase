import React, { useState } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home'

export default function App() {
    const [darkState, setDarkState] = useState(true);
    const palletType = darkState ? "dark" : "light";
    const customTheme = createMuiTheme({
      palette: {
        type: palletType,
      }
    });
    const handleThemeChange = () => {
      setDarkState(!darkState);
    };
    
    return (
        <MuiThemeProvider theme={customTheme}>
        <CssBaseline />
        <Header mode={darkState} handlerMode={handleThemeChange}/>
        <main>
            <Home/>
        </main>
        <Footer/>
        </MuiThemeProvider>
    );
  }
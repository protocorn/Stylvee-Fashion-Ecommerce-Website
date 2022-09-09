import { SnackbarProvider } from 'notistack';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import NavBar from '../components/Navbar';
import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar>
      </NavBar>
      <SnackbarProvider anchorOrigin={{vertical:'top', horizontal:'center'}}>
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </SnackbarProvider>
    </div>


  );
}

export default MyApp;

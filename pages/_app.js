import { useEffect } from 'react';
import Layout from '../components/Layout';
import NavBar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar>
    </NavBar>
        <Component {...pageProps} />
    </div>
    
    
  );
}

export default MyApp;

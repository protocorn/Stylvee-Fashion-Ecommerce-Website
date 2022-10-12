import { SnackbarProvider } from 'notistack';
import NavBar from '../components/Navbar';
import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';
import {PayPalScriptProvider} from '@paypal/react-paypal-js'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar>
      </NavBar>
      <SnackbarProvider anchorOrigin={{vertical:'top', horizontal:'center'}}>
        <StoreProvider>
          <PayPalScriptProvider deferLoading={true}>
          <Component {...pageProps} />
          </PayPalScriptProvider>
        </StoreProvider>
      </SnackbarProvider>
    </div>


  );
}

export default MyApp;

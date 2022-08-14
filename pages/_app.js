import { useEffect } from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (

  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
  useEffect(()=>{
  const el=document.getElementById('popover-left')
  }
  )
}

export default MyApp;

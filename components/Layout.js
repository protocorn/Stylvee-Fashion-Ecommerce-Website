import NavBar from './Navbar';
import Head from 'next/head';
import Script from 'next/script';
import { Popover, Button } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};
export default Layout;

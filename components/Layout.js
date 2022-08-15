import NavBar from './Navbar';
import Head from 'next/head';
import Script from 'next/script';
import ProductItem from './productItem';

import {
  Popover,
  Button,
  CircularProgress,
  Alert,
  Grid,
  Box,
} from '@mui/material';
import { useEffect, useState } from 'react';
import client from '../utils/client';
import { padding } from '@mui/system';

const Layout = ({ children }) => {
  const [state, setState] = useState({
    products: [],
    error: '',
    loading: true,
  });
  const { loading, error, products } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(`*[_type == "product"]`);
        setState({ products, loading: false });
      } catch (err) {
        setState({ loading: false, error: err.message });
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <NavBar />
      {children}
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <div
          style={{
            backgroundColor: '#FFDC62',
            marginTop: 20,
            padding: 20,
          }}
        >
          <Grid container spacing={2} wrap="wrap" columns={12}>
            {products.map((product) => (
              <Grid item md={2} key={product.slug}>
                <ProductItem product={product}></ProductItem>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};
export default Layout;

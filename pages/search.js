import { Alert, Box, Button, CircularProgress, Grid, List, ListItem, MenuItem, Select, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, {useEffect, useState } from 'react'
import client from '../utils/client';
import Image from 'next/image';
import { urlForThumbnail } from '../utils/image';

const prices = [
    {
      name: 'upto Rs.199',
      value: '0-199',
    },
    {
      name: 'Rs.200 to Rs.499',
      value: '200-499',
    },
    {
      name: 'Rs.500 to Rs.999',
      value: '500-999',
    },
    {
        name: 'Rs.1000 to Rs.2999',
        value: '1000-2999',
      },
      {
        name: 'Rs.3000 to Rs.4999',
        value: '3000-4999',
      },
      {
        name: 'Rs.5000 or more',
        value: '5000-10000000',
      },
  ];

  const categories = [
    {
      name: 'T-Shirt',
      value: 't-shirt',
    },
    {
        name: 'T-Shirt',
        value: 't-shirt',
      },
      {
        name: 'T-Shirt',
        value: 't-shirt',
      },
      {
        name: 'T-Shirt',
        value: 't-shirt',
      },
      {
        name: 'T-Shirt',
        value: 't-shirt',
      },
      {
        name: 'T-Shirt',
        value: 't-shirt',
      },
  ];

export default function SearchScreen() {
    const router =useRouter();
    const {
        category = 'all',
        query = 'all',
        price = 'all',
        rating = 'all',
        sort = 'default',
      } = router.query;
      const [state, setState] = useState({
        categories: [],
        products: [],
        error: '',
        loading: true,
      });

      const {loading,products,error} =state;

    useEffect(() => {
      const fetchData = async () => {
        try {
          let gQuery = '*[_type == "allproducts"';
          if (category !== 'all') {
            gQuery += ` && category match "${category}" `;
          }
          if (query !== 'all') {
            gQuery += ` && keywords match "${query}" `;
          }
          if (price !== 'all') {
            const minPrice = Number(price.split('-')[0]);
            const maxPrice = Number(price.split('-')[1]);
            gQuery += ` && finalprice >= ${minPrice} && finalprice <= ${maxPrice}`;
          }
          /*if (rating !== 'all') {
            gQuery += ` && rating >= ${Number(rating)} `;
          }*/
          let order = '';
          if (sort !== 'default') {
            if (sort === 'lowest') order = '| order(finalprice asc)';
            if (sort === 'highest') order = '| order(finalprice desc)';
            //if (sort === 'toprated') order = '| order(rating desc)';
          }
  
          gQuery += `] ${order}`;
          setState({ loading: true });
  
          const products = await client.fetch(gQuery);
          setState({ products, loading: false });
        } catch (err) {
          setState({ error: err.message, loading: false });
        }
      };
      fetchData();
    }, [category, price, query, sort]);

    const filterSearch = ({ category, sort, searchQuery, price}) => {
        const path = router.pathname;
        const { query } = router;
        if (searchQuery) query.searchQuery = searchQuery;
        if (category) query.category = category;
        if (sort) query.sort = sort;
        if (price) query.price = price;
        //if (rating) query.rating = rating;
    
        router.push({
          pathname: path,
          query: query,
        });
      };
      const categoryHandler = (e) => {
        filterSearch({ category: e.target.value });
      };
      const sortHandler = (e) => {
        filterSearch({ sort: e.target.value });
      };
      const priceHandler = (e) => {
        filterSearch({ price: e.target.value });
      };

  return (
    <>
    <Grid container spacing={2}>
        <Grid item md={3}>
          <List>
            <ListItem>
              <Box style={{width:'100%'}}>
                <Typography>Categories</Typography>
                <Select fullWidth value={category} onChange={categoryHandler}>
                  <MenuItem value="all">All</MenuItem>
                  {categories.map((category) => (
                    <MenuItem key={category.value} value={category.value}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </ListItem>
            <ListItem>
              <Box style={{width:'100%'}}>
                <Typography>Prices</Typography>
                <Select value={price} onChange={priceHandler} fullWidth>
                  <MenuItem value="all">All</MenuItem>
                  {prices.map((price) => (
                    <MenuItem key={price.value} value={price.value}>
                      {price.name}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={9}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              {products && products.length !== 0 ? products.length : 'No'}{' '}
              Results
              {query !== 'all' && query !== '' && ' : ' + query}
              {price !== 'all' && ' : Price ' + price}
              {rating !== 'all' && ' : Rating ' + rating + ' & up'}
              {(query !== 'all' && query !== '') ||
              rating !== 'all' ||
              price !== 'all' ? (
                <Button onClick={() => router.push('/search')}>X</Button>
              ) : null}
            </Grid>

            <Grid item style={{marginTop:10,marginRight:10,marginBottom:20}}>
              <Typography component="span" style={{marginRight:10}}>
                Sort by
              </Typography>
              <Select value={sort} onChange={sortHandler}>
                <MenuItem value="default">Default</MenuItem>
                <MenuItem value="lowest">Price: Low to High</MenuItem>
                <MenuItem value="highest">Price: High to Low</MenuItem>
                <MenuItem value="toprated">Customer Reviews</MenuItem>
              </Select>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            {loading ? (
              <CircularProgress />
            ) : error ? (
              <Alert>{error}</Alert>
            ) : (
                            <Grid container width='wrap' wrap="wrap" columns={12}>
                                {products.map((products) => (
                                    <Grid item margin={2} spacing={4} md={2} key={products.key}>
                                        <div style={{
                                            borderRadius: '20px', border: '2px solid #e0e0e0',
                                        }} >
                                            <a href={`product/view-product/${products.key.current}`} passHref>
                                                <Image src={urlForThumbnail(products.image)} width={500} height={600}  layout='intrinsic' style={{
                                                    borderRadius: '18px 18px 0px 0px',
                                                }} />
                                                <div style={{
                                                    margin: '10px',
                                                    textOverflow: 'ellipsis',
                                                    overflow: 'hidden', whiteSpace: 'nowrap',
                                                }}><font size='4' style={{
                                                    fontWeight: '500',
                                                }}>{products.name}</font>
                                                    <br></br>
                                                    <font size='3' style={{ fontWeight: '500', }}>Rs.{products.finalprice}</font>
                                                    <s><font size='3' color="#a1a1a1" style={{ fontWeight: '400', marginLeft: '10px' }}>Rs.{products.originalprice}</font></s>
                                                    <font size='3' color='#F66D0A' style={{ fontWeight: '500', marginLeft: '10px' }}>({parseInt(100 * (products.originalprice - products.finalprice) / products.originalprice)}%)</font>
                                                </div>
                                            </a>
                                        </div>
                                    </Grid>
                                ))}
                </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
      </>
  )
}

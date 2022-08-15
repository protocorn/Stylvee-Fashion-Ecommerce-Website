import {
  Card,
  CardActionArea,
  Box,
  CardMedia,
  Paper,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import React from 'react';
import { urlForThumbnail } from '../utils/image';

export default function productItem({ product }) {
  return (
    <div style={{ margin: 'auto' }}>
      <Card>
        <NextLink href={`/product/${product.slug.current}`} passHref>
          <CardActionArea>
            <CardMedia
              component="img"
              image={urlForThumbnail(product.image)}
              title={product.name}
            ></CardMedia>
          </CardActionArea>
        </NextLink>
      </Card>
      <Box sx={{ width: 150 }}>
        <Paper>
          <div
            style={{
              backgroundColor: '#fff',
            }}
          >
            <Typography align="center"> {product.name} </Typography>{' '}
          </div>{' '}
        </Paper>{' '}
      </Box>{' '}
    </div>
  );
}

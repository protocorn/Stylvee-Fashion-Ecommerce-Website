import {
  Card,
  CardActionArea,
  Box,
  CardMedia,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import React from 'react';
import { urlForThumbnail1 } from '../utils/image2';

export default function TrendingItem({ trending }) {
  return (
    <div style={{ margin: 'auto' }}>
      <Card>
        <NextLink href={`/product/${trending.slug.current}`} passHref>
          <CardActionArea>
            <CardMedia
              component="img"
              image={urlForThumbnail1(trending.image)}
              title={trending.name}
            ></CardMedia>
          </CardActionArea>
        </NextLink>
      </Card>
      <Box sx={{ width: 'wrap', height: 50 }}>
        <div
          style={{
            background: 'rgba(0,0,0,0.5)',
            position: 'relative',
            top: '-80px',
            height: 50,
            paddingTop: 13,
          }}
        >
          <Typography align="center">
            <font color="#fff" size="4" face="century gothic">
              <b> {trending.name} </b>
            </font>
          </Typography>
        </div>
      </Box>
    </div>
  );
}

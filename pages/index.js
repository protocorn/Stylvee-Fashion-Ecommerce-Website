import { CircularProgress, Grid, Alert, Typography } from '@mui/material';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import NavBar from '../components/Navbar';
import client from '../utils/client';

export default function Home() {
  return (
    <div>
      <Layout></Layout>
    </div>
  );
}

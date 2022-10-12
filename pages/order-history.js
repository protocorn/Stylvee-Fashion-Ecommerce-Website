import { Alert, Button, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useReducer } from 'react'
import { Store } from '../utils/Store';
import NextLink from 'next/link'

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true, error: '' };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, orders: action.payload, error: '' };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            state;
    }
}
function OrderHistoryScreen() {
    const { state } = useContext(Store);
    const { userInfo } = state;

    const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
        loading: true,
        orders: [],
        error: '',
    });
    const router = useRouter();
    useEffect(() => {
        if (!userInfo) {
            router.push('/login');
        }
        const fetchOrders = async () => {
            try {
                dispatch({ type: 'FETCH_REQUEST' });
                const { data } = await axios.get(`/api/orders/history`, {
                    headers: { authorization: `Bearer ${userInfo.token}` },
                });

                dispatch({ type: 'FETCH_SUCCESS', payload: data });
            }
            catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message })
            }
        }
        fetchOrders();
    }, [router, userInfo])
    return (
        <>
            <Typography component="h4" variant="h4" style={{margin:10}}>
                Order History
            </Typography>
            {loading ? (
                <CircularProgress />
            ) : error ? (
                <Alert variant="danger">{error}</Alert>
            ) : (
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><b>ID</b></TableCell>
                                <TableCell><b>DATE</b></TableCell>
                                <TableCell><b>TOTAL</b></TableCell>
                                <TableCell><b>PAID</b></TableCell>
                                <TableCell><b>ACTION</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow key={order._id}>
                                    <TableCell>{order._id}</TableCell>
                                    <TableCell>{order.createdAt}</TableCell>
                                    <TableCell>Rs.{order.totalPrice}</TableCell>
                                    <TableCell>
                                        {order.isPaid ? `paid at ${order.paidAt}` : 'not paid'}
                                    </TableCell>
                                    <TableCell>
                                        <NextLink href={`/order/${order._id}`} passHref>
                                            <Button variant="contained">Details</Button>
                                        </NextLink>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )
            }
        </>
    );
}
export default dynamic(() => Promise.resolve(OrderHistoryScreen), {ssr: false,});
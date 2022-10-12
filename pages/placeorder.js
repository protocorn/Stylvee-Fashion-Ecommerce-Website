import { Button, Card, Grid, Link, List, ListItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import CheckOutWizard from '../components/CheckOutWizard'
import { Store } from '../utils/Store'
import NextLink from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import jsCookie from 'js-cookie'
import dynamic from 'next/dynamic'

function PlaceOrderScreen() {
    const router = useRouter();
    const { state, dispatch} = useContext(Store);
    const {
        userInfo,
        cart: { cartItems, shippingAddress, paymentMethod },
    } = state;
    const round2=(num)=>Math.round(num*100+Number.EPSILON)/100
    const itemPrice=round2(cartItems.reduce((a,c)=>a+c.finalprice*c.quantity,0));
    const shippingFee=itemPrice>200 ? 0:1;
    const taxPrice = round2(itemPrice*0.1);
    const totalPrice=round2(itemPrice+shippingFee+taxPrice);
    useEffect(()=>{
        if(!paymentMethod){
            router.push('/payment');
        }
    },[router,paymentMethod,cartItems]);

    const placeOrderHandler=async()=>{
        try{
            const {data} = await axios.post(
                '/api/orders',
                {
                    orderItems: cartItems.map((x)=>({
                        ...x,
                        countInStock:undefined,
                    })),
                    shippingAddress,
                    paymentMethod,
                    itemPrice,
                    shippingFee,
                    taxPrice,
                    totalPrice,   
                },{
                    headers:{
                        authorization:`Bearer ${userInfo.token}`
                    }
                }
            );
            dispatch({type:'CART_CLEAR'});
            jsCookie.remove('cartItems');
            router.push(`/order/${data}`);
        }
        catch(err){
                console.error(err.message);
        }
    }
    return (
        <div>
            <CheckOutWizard activeStep={3}></CheckOutWizard>
            <Typography component="h4" variant="h4" style={{ margin: 20 }}>Order Summary</Typography>
            <Grid container spacing={1}>
                <Grid item md={9} xs={12}>
                    <Card style={{ margin: 10 }}>
                        <List>
                            <ListItem>
                                <div style={{ width: '100%' }}>
                                    <Stack direction="row">
                                        <Typography component="h5" variant="h5" style={{ width: '100%' }}>Shipping Address</Typography>
                                        <Button type="submit" style={{ border: '2px solid #FF6262', padding: '1px 2px', marginLeft: 30 }} onClick={() => router.push('/shipping')}><font color="#FF6262" size="2"><b>EDIT</b></font></Button>
                                    </Stack>
                                </div>
                            </ListItem>
                            <ListItem>
                                <b>{shippingAddress.fullName}</b>: {shippingAddress.address},{shippingAddress.city}
                                ,{shippingAddress.postalcode},{shippingAddress.country}
                            </ListItem>
                        </List>
                    </Card>
                    <Card style={{ margin: 10 }}>
                        <List>
                            <ListItem>
                            <div style={{ width: '100%' }}>
                                <Stack direction="row">
                                    <Typography component="h5" variant="h5"  style={{ width: '100%' }}>Payment Method</Typography>
                                    <Button type="submit" style={{ border: '2px solid #FF6262', padding: '1px 2px', marginLeft: 30 }} onClick={() => router.push('/payment')}><font color="#FF6262" size="2"><b>EDIT</b></font></Button>
                                </Stack>
                                </div>
                            </ListItem>
                            <ListItem>
                                {paymentMethod}
                            </ListItem>
                        </List>
                    </Card>
                    <Card style={{ margin: 10 }}>
                        <List>
                            <ListItem>
                                <Stack direction="row">
                                    <Typography component="h5" variant="h5">Order Items</Typography>
                                </Stack>
                            </ListItem>
                            <ListItem>
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>
                                                    <b>Image</b>
                                                </TableCell>
                                                <TableCell>
                                                    <b>Name</b>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <b>Quantity</b>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <b>Size</b>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <b>Price</b>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {cartItems.map((item) => (
                                                <TableRow key={item._key}>
                                                    <TableCell>
                                                        <NextLink href={`/product/view-product/${item.p_key}`} passHref>
                                                            <Link>
                                                                <Image src={item.image} width={50} height={50}></Image>
                                                            </Link>
                                                        </NextLink>
                                                    </TableCell>
                                                    <TableCell>
                                                        <NextLink href={`/product/view-product/${item.p_key}`} passHref>
                                                            <Link>
                                                                <Typography>{item.name}</Typography>
                                                            </Link>
                                                        </NextLink>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {item.quantity}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {item.size}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <Typography>Rs.{item.finalprice}</Typography>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Card>
                        <List>
                            <ListItem>
                                <Typography variant='h5'>Order Overview</Typography>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography>Items:</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography align='right'>Rs. {itemPrice}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography>Shipping Fee:</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography align='right'>Rs. {shippingFee}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography>Taxes</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography align='right'>Rs. {taxPrice}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography><b>Total:</b></Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography align='right'><b>Rs. {totalPrice}</b></Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                    <Button type="submit" style={{ backgroundColor: '#FF6262', padding: '10px 32px', width: '100%' }} fullWidth onClick={placeOrderHandler}><font color="#fff" size="3"><b>Place Order</b></font></Button>
                </ListItem>
                        </List>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
export default dynamic(()=> Promise.resolve(PlaceOrderScreen),{ssr:false})

import { Box, Button, Card, Grid, Link, List, ListItem, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useContext } from "react";
import { Store } from "../utils/Store";
import NextLink from "next/link"
import Image from "next/image";
import dynamic from "next/dynamic";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";

function CartScreen() {
    const {
        state: {
            cart: { cartItems },
        },
        dispatch
    } = useContext(Store);
    const { enqueueSnackbar } = useSnackbar();
    const router=useRouter()
    const updateCartHandler = async(item,quantity) => {
        const { data } = await axios.get(`/api/products/${item._id}`);
        if (data.countInStock < quantity) {
            enqueueSnackbar('Sorry! Product Is Out Of Stock', { variant: 'error' });
            return;
        }
        dispatch({
            type: 'CART_ADD_ITEM', payload: {
                _key: item._key,
                name: item.name,
                countInStock: item.countInStock,
                originalprice: item.originalprice,
                finalprice: item.finalprice,
                image: item.image,
                p_key: item.p_key,
                quantity,
                size:item.size,
            },
        });
        enqueueSnackbar(`${item.name} updated in cart`, { variant: 'success' });
    }
    const removeItemHandler= (item)=>{
        dispatch({type:'CART_REMOVE_ITEM',payload:item});
    }

    return (
        <div>
            <Typography variant="h5" style={{margin:20}}>MY CART</Typography>
            {cartItems.length === 0 ? (
                <Box><Typography>Cart is Empty<NextLink href="/" passHref><Link>Go Shopping</Link></NextLink></Typography></Box>
            ) : (
                <Grid container spacing={1}>
                    <Grid item md={9} xs={12}>
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
                                        <TableCell align="right">
                                        <b>Action</b>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cartItems.map((item)=>(
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
                                            <TableCell  align="right">
                                                <Select value={item.quantity} onChange={(e)=>updateCartHandler(item, e.target.value)}>
                                                    {[...Array(item.countInStock).keys()].map((x)=>(<MenuItem key={x+1} value={x+1}>{x+1}</MenuItem>))}
                                                </Select>   
                                            </TableCell>
                                            <TableCell  align="right">
                                                <Typography>{item.size}</Typography>
                                            </TableCell>
                                            <TableCell  align="right">
                                                <Typography>Rs.{item.finalprice}</Typography>
                                            </TableCell>
                                            <TableCell  align="right">
                                                <Button onClick={()=> removeItemHandler(item)}>x</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item md={3} xs={12}>
                            <Card>
                                <List>
                                    <ListItem> 
                                        <Typography variant="h6">Subtotal ({cartItems.reduce((a,c)=> a+c.quantity,0)} items):
                                        Rs. {cartItems.reduce((a,c)=> a+c.quantity*c.finalprice ,0)} </Typography>
                                    </ListItem>
                                    <ListItem>
                                    <Button type="submit" style={{ backgroundColor: '#FF6262', padding: '5px', width: '100%' }} fullWidth onClick={()=>{router.push('/shipping')}}><font color="#fff" size="3"><b>CHECKOUT</b></font></Button>
                                    </ListItem>
                                </List>
                            </Card>
                        </Grid>
                    </Grid>
            )}
        </div>
    )
}

export default dynamic(()=> Promise.resolve(CartScreen),{ssr:false})
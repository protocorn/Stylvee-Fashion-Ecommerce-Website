import { Alert, Button, CircularProgress, Divider, Grid, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Box, style } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import client from "../../../utils/client";
import { useSnackbar } from 'notistack';
import { urlForThumbnail } from "../../../utils/image";
import Image from "next/image";
import React from "react";
import axios from 'axios';
import { Store } from "../../../utils/Store";

export default function ViewProductScreen(props) {
    const { slug } = props;
    const { state: { cart }, dispatch } = useContext(Store);
    const { enqueueSnackbar } = useSnackbar();
    const [state, setState] = useState({
        product: null,
        loading: true,
        error: ''
    });

    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const { product, loading, error } = state;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const product = await client.fetch(`*[_type=="allproducts" && key.current==$slug][0]`, { slug });
                setState({ product, loading: false });
            }
            catch (err) {

                setState({ error: err.message, loading: false });
            }
        };
        fetchData();
    }, []);

    const addToCartHandler = async () => {
        const existItem = cart.cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await axios.get(`/api/products/${product._id}`);
        if (data.countInStock < quantity) {
            enqueueSnackbar('Sorry! Product Is Out Of Stock', { variant: 'error' });
            return;
        }
        dispatch({
            type: 'CART_ADD_ITEM', payload: {
                _key: product._id,
                name: product.name,
                countInStock: product.stock,
                originalprice: product.originalprice,
                finalprice: product.finalprice,
                image: urlForThumbnail(product.image),
                p_key: product.key,
                quantity,
            },
        });
        enqueueSnackbar(`${product.name} added`, { variant: 'success' });
    };

    return (
        <div>
            {loading ? (
                <CircularProgress />
            ) : error ? (
                <Alert variant="danger">{error}</Alert>
            ) : (
                <div>
                    <Stack direction="row" spacing={2}>
                        <Box sx={{ width: screen.width / 2 }}>
                            <Grid container width="wrap" wrap="wrap" columns={3}>
                                {product.imagelist.map((items) => (
                                    <Grid item margin={2} md={1} key={items}>
                                        <Image
                                            src={urlForThumbnail(items)}
                                            width={900} height={1200}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                        <div style={{ marginRight: 20, width: '50%' }}>
                            <br></br>
                            <font size='6'><b>{product.name}</b></font>
                            <p>rating</p>
                            <br></br>
                            <Divider></Divider>
                            <br></br>
                            <font size='5' style={{ fontWeight: '500', }}>Rs. {product.finalprice}</font>
                            <s><font size='4' color="#a1a1a1" style={{ fontWeight: '400', marginLeft: '20px' }}>Rs. {product.originalprice}</font></s>
                            <font size='5' color='#F66D0A' style={{ fontWeight: '500', marginLeft: '20px' }}>({parseInt(100 * (product.originalprice - product.finalprice) / product.originalprice)}%)</font>
                            <p style={{ fontWeight: '500', }}>inclusive of all taxes</p>
                            <br></br>
                            <p style={{ fontWeight: '500', }}>Select Size</p>
                            <br></br>
                            <ToggleButtonGroup
                                color="warning"
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                aria-label="Platform"
                                fullWidth={true}
                            >
                                <ToggleButton value="xs"><b>XS</b></ToggleButton>
                                <ToggleButton value="s"><b>S</b></ToggleButton>
                                <ToggleButton value="m"><b>M</b></ToggleButton>
                                <ToggleButton value="l"><b>L</b></ToggleButton>
                                <ToggleButton value="xl"><b>XL</b></ToggleButton>
                                <ToggleButton value="xxl"><b>XXL</b></ToggleButton>
                            </ToggleButtonGroup>
                            <div>
                                <br></br>
                                <Stack direction="row" spacing={2}>
                                    <div style={{ backgroundColor: '#FF6262', width: '50%', height: 'wrap', padding: 5 }} onClick={addToCartHandler}>
                                        <Stack direction="row" spacing={2} style={{ textAlign: 'center' }}>
                                            <img src="https://img.icons8.com/sf-regular-filled/48/FFFFFF/shopping-cart.png" style={{
                                                marginLeft: '20%',
                                            }} />
                                            <p style={{
                                                marginTop: 10,
                                                marginRight: '20%',
                                                color: 'white',
                                                fontWeight: 500
                                            }}>ADD TO CART</p>
                                        </Stack>
                                    </div>
                                    <div style={{ backgroundColor: '#FFFFF', width: '50%', height: 'wrap', padding: 5, border: '1px solid #bababa' }}>
                                        <Stack direction="row" spacing={2} style={{ textAlign: 'center' }}>
                                            <img src="https://img.icons8.com/material-outlined/48/000000/like--v1.png" style={{
                                                marginLeft: '20%',
                                            }} />
                                            <p style={{
                                                marginTop: 10,
                                                marginRight: '20%',
                                                fontWeight: 500
                                            }}>WISHLIST</p>
                                        </Stack>
                                    </div>
                                </Stack>
                                <br></br>
                                <p style={{ fontWeight: '500', }}>100% original products</p>
                                <p style={{ fontWeight: '500', }}>30 days return policy</p>
                                <br></br>
                                <Divider></Divider>
                                <br></br>
                                <font size="5" style={{ fontWeight: '600', margin: 20 }}>PRODUCT DETAILS</font>
                                <Box sx={{ width: '100%' }}>
                                    <Grid container width="100%" wrap="wrap" columns={3} >
                                        {product.description.map((products) => (
                                            <Grid item margin={2} spacing={4} md={1} key={products}>
                                                <div style={{ padding: 5, border: '2px solid #FF6262', display: 'block' }}>
                                                    <h1 style={{ fontWeight: 500, marginLeft: 10, marginRight: 10 }}>{products.title}</h1>
                                                    <font color="#FF6262" size="4" style={{ fontWeight: 500, marginLeft: 10, marginRight: 10 }}>{products.value}</font>
                                                </div>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </div>
                        </div>
                    </Stack>
                    <font size="4" style={{ fontWeight: '500', margin: 20 }}>Review and Ratings</font>
                </div >
            )
            }
        </div >
    )
}

export function getServerSideProps(context) {
    return {
        props: { slug: context.params.slug }
    };
}
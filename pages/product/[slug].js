import { useEffect, useState } from "react";
import client from "../../utils/client";
import { Alert, Box, Card, CardActionArea, CardMedia, CircularProgress, Grid, Link, Skeleton, Stack, Typography } from "@mui/material";
import NextLink from 'next/link'
import { urlForThumbnail } from "../../utils/image";
import Image from "next/image";

export default function ProductScreen(props) {
    const { slug } = props;
    const [state, setState] = useState({
        product: [],
        loading: true,
        error: ''
    });
    const { product, loading, error } = state;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const product = await client.fetch(`*[_type=="allproducts" && category==$slug]`, { slug });
                setState({ product, loading: false });
            }
            catch (err) {
                setState({ error: err.message, loading: false });
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            {loading ? (
                <Grid container margin={2} spacing={4} wrap="wrap" columns={4}>
                    <div>
                        <Skeleton variant="rectangular" width={150} height={200} style={{ margin: 30 }} />
                        <Skeleton variant="rectangular" width={100} height={20} style={{ margin: 30 }} />
                        <Skeleton variant="rectangular" width={140} height={20} style={{ margin: 30 }} />
                    </div>
                    <div>
                        <Skeleton variant="rectangular" width={150} height={200} style={{ margin: 30 }} />
                        <Skeleton variant="rectangular" width={100} height={20} style={{ margin: 30 }} />
                        <Skeleton variant="rectangular" width={140} height={20} style={{ margin: 30 }} />
                    </div>
                    <div>
                        <Skeleton variant="rectangular" width={150} height={200} style={{ margin: 30 }} />
                        <Skeleton variant="rectangular" width={100} height={20} style={{ margin: 30 }} />
                        <Skeleton variant="rectangular" width={140} height={20} style={{ margin: 30 }} />
                    </div>
                    <div>
                        <Skeleton variant="rectangular" width={150} height={200} style={{ margin: 30 }} />
                        <Skeleton variant="rectangular" width={100} height={20} style={{ margin: 30 }} />
                        <Skeleton variant="rectangular" width={140} height={20} style={{ margin: 30 }} />
                    </div>
                </Grid>
            ) : error ? (
                <Alert variant="danger">{error}</Alert>
            ) : (
                <div style={{ position: 'absolute' }}>
                    <Box width='wrap'>
                        <Box >
                            <Grid container width='wrap' wrap="wrap" columns={12}>
                                {product.map((products) => (
                                    <Grid item margin={2} spacing={4} md={2} key={products.key}>
                                        <div style={{
                                            borderRadius: '20px', border: '2px solid #e0e0e0',
                                        }} >
                                            <a href={`view-product/${products.key.current}`} passHref>
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
                        </Box>
                    </Box>
                </div>
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


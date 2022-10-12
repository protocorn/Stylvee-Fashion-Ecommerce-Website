import { Button, List, ListItem, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import CheckOutWizard from '../components/CheckOutWizard'
import Form from '../components/Form'
import { Store } from '../utils/Store'
import jsCookie from 'js-cookie'

export default function ShippingScreen() {
    const { handleSubmit, control, formState: { errors }, setValue} = useForm();
    const router=useRouter();
    const {state,dispatch}=useContext(Store);
    const {userInfo,cart:{shippingAddress},}=state;

    useEffect(()=>{
        if(!userInfo){
            return router.push('/login?redirect=/shipping')
        }
        setValue('fullName',shippingAddress.fullName);
        setValue('address',shippingAddress.address);
        setValue('city',shippingAddress.city);
        setValue('postalcode',shippingAddress.postalcode);
        setValue('country',shippingAddress.country);
    },[router,setValue,shippingAddress,userInfo]);

    const submitHandler=({fullName,address,city,postalcode,country})=>{
        dispatch({
            type:'SAVE_SHIPPING_ADDRESS',
            payload:{fullName,address,city,postalcode,country},
        });
        jsCookie.set('shippingAddress',
        JSON.stringify({
            fullName,address,city,postalcode,country
        })
        );
        router.push('/payment')
    };

    return (
        <div>
            <CheckOutWizard activeStep={1}></CheckOutWizard>
            <Form onSubmit={handleSubmit(submitHandler)}>
                <Typography component="h4" variant="h4" style={{margin:20}}>Shipping Address</Typography>
                <List>
                    <ListItem>
                        <Controller name="fullName" control={control} defaultValue=""
                            rules={{
                                required: true,
                                minLength: 2,
                            }}
                            render={({ field }) => (
                                <TextField variant='outlined' fullWidth id='fullName' label='Full Name'
                                    style={{ marginTop: 10 }}
                                    inputProps={{ type: 'fullName' }}
                                    error={Boolean(errors.fullName)}
                                    helperText={errors.fullName ? errors.fullName.type == "minLength" ? 'Enter A Valid Name' : 'Name is required' : ''}
                                    {...field}
                                ></TextField>
                            )}
                        >
                        </Controller>
                    </ListItem>
                    <ListItem>
                        <Controller name="address" control={control} defaultValue=""
                            rules={{
                                required: true,
                                minLength: 2,
                            }}
                            render={({ field }) => (
                                <TextField variant='outlined' fullWidth id='address' label='Address'
                                    style={{ marginTop: 10 }}
                                    inputProps={{ type: 'address' }}
                                    error={Boolean(errors.address)}
                                    helperText={errors.address ? errors.address.type == "minLength" ? 'Enter A Valid Name' : 'Name is required' : ''}
                                    {...field}
                                ></TextField>
                            )}
                        >
                        </Controller>
                    </ListItem>
                    <ListItem>
                        <Controller name="city" control={control} defaultValue=""
                            rules={{
                                required: true,
                                minLength: 2,
                            }}
                            render={({ field }) => (
                                <TextField variant='outlined' fullWidth id='city' label='City'
                                    style={{ marginTop: 10 }}
                                    inputProps={{ type: 'city' }}
                                    error={Boolean(errors.city)}
                                    helperText={errors.city ? errors.city.type == "minLength" ? 'Enter A Valid Name' : 'Name is required' : ''}
                                    {...field}
                                ></TextField>
                            )}
                        >
                        </Controller>
                    </ListItem>
                    <ListItem>
                        <Controller name="postalcode" control={control} defaultValue=""
                            rules={{
                                required: true,
                                minLength: 2,
                            }}
                            render={({ field }) => (
                                <TextField variant='outlined' fullWidth id='postalcode' label='Postal Code'
                                    style={{ marginTop: 10 }}
                                    inputProps={{ type: 'postalcode' }}
                                    error={Boolean(errors.postalcode)}
                                    helperText={errors.postalcode ? errors.postalcode.type == "minLength" ? 'Enter A Valid Name' : 'Name is required' : ''}
                                    {...field}
                                ></TextField>
                            )}
                        >
                        </Controller>
                    </ListItem>
                    <ListItem>
                        <Controller name="country" control={control} defaultValue=""
                            rules={{
                                required: true,
                                minLength: 2,
                            }}
                            render={({ field }) => (
                                <TextField variant='outlined' fullWidth id='country' label='Country'
                                    style={{ marginTop: 10 }}
                                    inputProps={{ type: 'country' }}
                                    error={Boolean(errors.country)}
                                    helperText={errors.country ? errors.country.type == "minLength" ? 'Enter A Valid Name' : 'Name is required' : ''}
                                    {...field}
                                ></TextField>
                            )}
                        >
                        </Controller>
                    </ListItem>
                    <ListItem>
                    <Button type="submit" style={{ backgroundColor: '#FF6262', padding: '15px 32px', width: '100%' }} fullWidth><font color="#fff" size="3"><b>CONTINUE</b></font></Button>
                </ListItem>
                </List>
            </Form>
        </div>
    )
}

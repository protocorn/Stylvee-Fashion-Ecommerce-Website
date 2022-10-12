import { Button, List, ListItem, TextField, Typography } from '@mui/material';
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useContext, useEffect } from 'react'
import Form from '../components/Form';
import NextLink from 'next/link'
import Link from 'next/link';
import {useRouter} from 'next/router'
import {Store} from '../utils/Store'
import jsCookie from 'js-cookie'
import axios from 'axios';
import { useSnackbar } from 'notistack';


export default function LoginScreen() {
    const { state, dispatch } = useContext(Store);
    const { userInfo } = state;
    const { handleSubmit, control, formState: { errors } } = useForm();
    const router =useRouter();
    const {redirect}= router.query;

    useEffect(()=>{
        if(userInfo){
            router.push(redirect || '/')
        }
    },[router,userInfo,redirect])

    const { enqueueSnackbar } = useSnackbar();
    const submitHandler = async ({email, password}) => {
        try {
            const {data}= await axios.post('/api/users/login',{email,password});
            dispatch({type:'USER_LOGIN',payload:data});
            jsCookie.set('userInfo',JSON.stringify(data));
            router.push(redirect || '/');
        }
        catch (err) {
            enqueueSnackbar(err.message,{variant:'error'});
        }
    };
    return (
            <Form onSubmit={handleSubmit(submitHandler)} style={{marginTop:30}}>
                <font size="6" style={{marginLeft:20}}><b>Login</b></font>
                <List>
                    <ListItem>
                        <Controller name="email" control={control} defaultValue=""
                            rules={{
                                required: true,
                                pattern: /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-z]{2,4}$/,
                            }}
                            render={({ field }) => (
                                <TextField variant='outlined' fullWidth id='email' label='Email'
                                style={{marginTop:10}}
                                    inputProps={{ type: 'email' }}
                                    error={Boolean(errors.email)}
                                    helperText={errors.email ? errors.email.type == "pattern" ? 'Please Enter A Valid Email Address' : 'Email Cannot Be Empty' : ''}
                                    {...field}
                                ></TextField>
                            )}
                        >
                        </Controller>
                    </ListItem>
                    <ListItem>
                        <Controller name="password" control={control} defaultValue=""
                            rules={{
                                required: true,
                                minLength: 6
                            }}
                            render={({ field }) => (
                                <TextField variant='outlined' fullWidth id='password' label='Password'
                                    inputProps={{ type: 'password' }}
                                    error={Boolean(errors.password)}
                                    helperText={errors.password ? errors.password.type == "minLength" ? 'Password is too short' : 'Wrong Email or Password' : ''}
                                    {...field}
                                ></TextField>
                            )}
                        >
                        </Controller>
                    </ListItem>
                    <ListItem>
                        <Button type="submit" style={{backgroundColor:'#FF6262', padding:'15px 32px', width:'100%'}}><font color="#fff"><b>L O G I  N</b></font></Button>
                    </ListItem>
                    <ListItem>
                        Do not have an account on Stylvee?
                        <NextLink href={`/register?redirect=${redirect || '/'}`} passHref><Link>
                            <font color="#F66D0A"><u> Register Now</u></font>
                        </Link></NextLink>
                    </ListItem>
                </List>
            </Form>
    )
}

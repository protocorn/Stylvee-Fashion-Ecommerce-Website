import { Button, List, ListItem, TextField, Link } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Form from '../components/Form';
import NextLink from 'next/link'
import jsCookie from 'js-cookie'
import {useRouter} from 'next/router'
import {Store} from '../utils/Store'
import { useSnackbar } from 'notistack';
import axios from 'axios';

export default function RegisterScreen() {
    const {state, dispatch} =useContext(Store);
    const {userInfo} =state; 
    const router =useRouter();
    useEffect(()=>{
        if(userInfo){
            router.push('/')
        }
    },[router,userInfo])
    const { enqueueSnackbar } = useSnackbar();

    const { handleSubmit, control, formState: { errors } } = useForm();
    const submitHandler = async (name, email, password) => {
        try {
            const {data}= await axios.post('/api/users/register',{name,email,password});
            dispatch({type:'USER_LOGIN',payload:data});
            jsCookie.set('userInfo',JSON.stringify(data));
            router.push('/')
        }
        catch (err) {
            enqueueSnackbar(err.message, { variant: 'error' });
        }
    }
    return (
        <Form onSubmit={handleSubmit(submitHandler)} style={{ marginTop: 30 }}>
            <font size="6" style={{ marginLeft: 20 }}><b>Register</b></font>
            <List>
                <ListItem>
                    <Controller name="name" control={control} defaultValue=""
                        rules={{
                            required: true,
                            minLength: 2,
                        }}
                        render={({ field }) => (
                            <TextField variant='outlined' fullWidth id='name' label='Name'
                                style={{ marginTop: 10 }}
                                inputProps={{ type: 'name' }}
                                error={Boolean(errors.name)}
                                helperText={errors.name ? errors.name.type == "minLength" ? 'Enter A Valid Name' : 'Name is required' : ''}
                                {...field}
                            ></TextField>
                        )}
                    >
                    </Controller>
                </ListItem>
                <ListItem>
                    <Controller name="email" control={control} defaultValue=""
                        rules={{
                            required: true,
                            pattern: /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-z]{2,4}$/,
                        }}
                        render={({ field }) => (
                            <TextField variant='outlined' fullWidth id='email' label='Email'
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
                    <Button type="submit" style={{ backgroundColor: '#FF6262', padding: '15px 32px', width: '100%' }}><font color="#fff"><b>R E G I S T E R</b></font></Button>
                </ListItem>
                <ListItem>
                    Already have an account?
                    <NextLink href={'/register'} passHref><Link>
                        <font color="#F66D0A"><u>Login</u></font>
                    </Link></NextLink>
                </ListItem>
            </List>
        </Form>
    )
}

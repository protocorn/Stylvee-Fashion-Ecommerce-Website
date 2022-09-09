import { Button, List, ListItem, TextField, Typography } from '@mui/material';
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import Form from '../components/Form';
import NextLink from 'next/link'
import Link from 'next/link';
import jsCookie from 'js-cookie'
import {useRouter} from 'next/router'

export default function RegisterScreen() {
    const { handleSubmit, control, formState: { errors } } = useForm();
    const router =useRouter();
    const submitHandler = async (name, email, password) => {
        try {
            const {data}= await axios.post('/api/users/register',{name,email,password});
            dispatch({type:'USER_LOGIN',payload:data});
            jsCookie.set('userinfo',JSON.stringify(data));
            router.push('/')
        }
        catch (err) {
            err.message
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
                    <button type="submit" style={{ backgroundColor: '#FF6262', padding: '15px 32px', width: '100%' }}><font color="#fff"><b>R E G I S T E R</b></font></button>
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

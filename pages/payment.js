import { Button, FormControl, FormControlLabel, List, ListItem, Radio, RadioGroup, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import CheckOutWizard from '../components/CheckOutWizard'
import Form from '../components/Form'
import { Store } from '../utils/Store';
import jsCookie from 'js-cookie'
import { useSnackbar } from 'notistack';

export default function PaymentScreen() {
    const router=useRouter();
    const [paymentMethod,setPaymentMethod]=useState('');
    const {state,dispatch}=useContext(Store);
    const { enqueueSnackbar } = useSnackbar();
    const {cart:{shippingAddress},}=state;
    useEffect(()=>{
        if(!shippingAddress.address){
            router.push('/shipping');
        }else{
            setPaymentMethod(jsCookie.get('paymentMethod') || '')
        }
    },[router,shippingAddress])
    const submitHandler=(e)=>{
        e.preventDefault();
        if(!paymentMethod){
            enqueueSnackbar('Payment Method Is Required',{variant:'error'});
        }
        else{
            dispatch({type:'SAVE_PAYMENT_METHOD',payload:paymentMethod});
            jsCookie.set('paymentMethod',paymentMethod);
            router.push('/placeorder')
        }
    }
  return (
    <div>
    <CheckOutWizard activeStep={2}></CheckOutWizard>
    <script>
        
    </script>
    <Form onSubmit={submitHandler}>
        <Typography variant="h4" style={{margin:20}}>Select Payment Method</Typography>
        <List>
            <ListItem>
                <FormControl component="fieldset">
                    <RadioGroup aria-label='Payment Method' name='paymentMethod' value={paymentMethod} onChange={(e)=>setPaymentMethod(e.target.value)}>
                        <FormControlLabel label="PayPal" value="PayPal" control={<Radio/>}>
                        </FormControlLabel>
                        <FormControlLabel label="Stripe" value="Stripe" control={<Radio/>}>
                        </FormControlLabel>
                        <FormControlLabel label="Cash" value="Cash" control={<Radio/>}>
                        </FormControlLabel>
                    </RadioGroup>
                </FormControl>
            </ListItem>
            <ListItem>
                <div style={{width:'100%'}}>
                <Stack direction="row" spacing={2}>
                    <Button type="submit" style={{border: '2px solid #FF6262',padding: '15px 32px', width: '100%' }} fullWidth onClick={()=>router.push('/shipping')}><font color="#FF6262" size="3"><b>BACK</b></font></Button>
                    <Button type="submit" style={{ backgroundColor: '#FF6262', padding: '15px 32px', width: '100%' }} fullWidth><font color="#fff" size="3"><b>CONTINUE</b></font></Button>
                    </Stack>
                    </div>
                </ListItem>
        </List>
    </Form>
    </div>
  )
}

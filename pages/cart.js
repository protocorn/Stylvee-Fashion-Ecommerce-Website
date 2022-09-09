import { Typography } from "@mui/material";
import { useContext } from "react";
import { Store } from "../utils/Store";

function CartScreen(){
    const{
        state:{
            cart:{cartItems},
        },
        dispatch
    }=useContext(Store);
    return(
        <div>
            <Typography>SHOPPING CART</Typography>
        </div>
    )
}

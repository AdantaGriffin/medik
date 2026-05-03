import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Cart from "../shoppingCart/cart";

function Root(){

    return (
        <>
            <Header/>
            <Cart/>
            <Outlet/>    
            <Footer/>    
        </>
    )
};

export default Root;
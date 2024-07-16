import React from "react";
import HomeLoan from "./component/HomeLoan/HomeLoan";
import "./component/css/HomeLoan.css";



function App(){
    return(
        <>
            <HomeLoan/>
        </>
    )
}

export default App;







































































// import { useState } from "react";
    // import React from "react";
    // import ProductList from "./pages/productList";
    // import Header from "./pages/Header";
    // import CarList from "./pages/cartList";
    
    // function App(){
    //     const [product, setProduct] = useState([
    //         {
    //              img : "/img/shoes.webp",
    //              name : "TRQ white Shoes",
    //              catogary : "shoes",
    //              seller : "AMZ Seller Ghz",
    //              price : 1500
    //          },
            
    //          {
    //              img : "/img/watch.webp",
    //              name : "LOREM Watch Black",
    //              catogary : "Watches",
    //              seller : "Watch Ltd Siyana",
    //              price : 2500
    //          },
            
    //          {
    //              img : "/img/laptop.webp",
    //              name : "Amz Laptop 8 gb ram",
    //              catogary : "Laptop",
    //              seller : "Delhi Laptop",
    //              price : 2000
    //          },
            
    //          {
    //              img : "/img/cemra.webp",
    //              name : "Cemra",
    //              catogary : "CCTV",
    //              seller : "AMZ CCTV Ghz",
    //              price : 5000
    //          },
            
    //          {
    //              img : "/img/violet.webp",
    //              name : "Gren Voilet",
    //              catogary : "Viloet",
    //              seller : "AMZ Gren Voilet",
    //              price : 3500
    //          },
            
    //          {
    //              img : "/img/botal.webp",
    //              name : "Bottal",
    //              catogary : "Botal",
    //              seller : "AMZ Botal",
    //              price : 1500
    //          }
            
    //     ])


    //     const [cart, setCart] = useState([]);
    //     const [showCart, setShowCart] = useState([]);


    //     const addToCart = (data) => setCart([...cart, {...data, quantity : 1}])
    //     const handleShow = (value) => setShowCart(value)


    //     return(
    //         <>
    //             <Header count = {cart.length} handleShow = {handleShow}></Header>
    //             {
    //                 showCart?
    //                 <CarList cart={cart}></CarList>:
    //                 <ProductList product = {product} addToCart={addToCart}></ProductList>
    //             }   
    //         </>
    //     )
    // }
    // export default App;



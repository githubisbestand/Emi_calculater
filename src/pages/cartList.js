import React, { useEffect, useState } from "react";

function CarList({ cart }) {
    const [CART, setCART] = useState([]);

    useEffect(() => {
        setCART(cart);
    }, [cart]);

    return (
        <>
            <div className="car_list">
                {CART?.map((cartItem, cartIndex) => {
                    return (
                        <div key={cartIndex}>
                            <img src={cartItem.img} width={100} alt={cartItem.name} />
                            <span>{cartItem.name}</span>
                            <button onClick={() => {
                                const _cart = CART.map((item, index) => {
                                    return cartIndex === index  && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item;
                                });
                                setCART(_cart);
                            }}
                            >-</button>
                            <button> {cartItem.quantity} </button>
                            <button onClick={() => {
                                const _cart = CART.map((item, index) => {
                                    return cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item;
                                });
                                setCART(_cart);
                            }}>+</button>
                            <span> Rs.{cartItem.price * cartItem.quantity} /-</span>
                        </div>
                    )
                })}
                <hr style={{marginTop:"20px", marginBottom : "10px"}}/>
        
                <p>Total Amount : <span></span>
                    {
                        CART.map(item => item.price * item.quantity).reduce((cur, total) => cur + total, 0)
                    }
                </p>
            </div>
        </>
    )
}

export default CarList;

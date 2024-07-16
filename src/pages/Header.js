import React from "react";

function Header(props){
    return(
        <>
            <div>
                    <div className="flex justifycontent">
                        <p onClick={() => props.handleShow(false)}>Shoping Cart</p>
                        <p onClick={() => props.handleShow(true)}>Cart
                            <sup>{props.count}</sup>
                        </p>
                    </div>    
            </div>  
        </>
    )
}
export default Header;
function ProductList({ product, addToCart }){

    const productList = [];

    for(let i = 0; i<product.length; i++){
        const productItem = product[i];
        productList.push(
            <div key={i} style={{width : "33%"}}>
                <div className="product-item">
                    <img src={productItem.img} width="50%" />
                    <p>{productItem.name} | {productItem.catogary}</p>
                    <p> {productItem.seller} </p>
                    <p> Rs. {productItem.price} /-</p>
                    <button onClick={()=> addToCart(productItem)}>Add to cart</button>
                </div>
            </div>
        )
    }



    return(
        <>
           <div className="flex">
            { productList }
           </div>
        </>
    )
}
export default ProductList;
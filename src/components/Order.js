function Product(props) {
    return (
        <div style={{border: '1px solid blue', display: 'flex', marginBottom: '10px', width: '20rem', justifyContent:'center', alignItems:'center'}}>
            <div style={{marginRight: '20px', border: '1px solid blue'}}>{props.element.name}</div>
            <div style={{marginRight: '20px', border: '1px solid blue'}}>
                <p>ToTal Price</p>
                <p>{props.element.totalPrice}</p>
            </div>
            <div style={{border: '1px solid blue'}}>
                <p>Quantity</p>
                {props.element.quantity}
            </div>
        </div>
    )
}

export default Product;
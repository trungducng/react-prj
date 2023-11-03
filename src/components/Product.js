import {useState} from 'react';
import axios from 'axios';

function Product(props) {
    const [quantity, setQuantity] = useState(0);

    const addToOrder = () => {
        setQuantity(quantity+1);
        axios.post('http://localhost:8080/orders', {
            payload: {
                name: props.element.name,
                quantity,
                totalPrice: quantity*Number(props.element.price.replace(/[^0-9.-]+/g,""))
            }
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div style={{border: '1px solid blue', display: 'flex', marginBottom: '10px', width: '20rem', justifyContent:'center', alignItems:'center'}}>
            <div style={{marginRight: '20px', border:'1px solid green', width: '100px'}}>
                <div>{props.element.name}</div>
                <div>{props.element.price}</div>
            </div>

            <div style={{marginRight: '20px', border:'1px solid green', width: '100px', display: 'flex', marginBottom: '10px', justifyContent:'center', alignItems:'center'}}>
                <div>Quantity</div>
                <div style={{color: 'red', marginLeft: '20px'}}>{quantity}</div>
            </div>
            
            <button onClick={() => addToOrder()}>Add to order</button>
        </div>
    )
}

export default Product;
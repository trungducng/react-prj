import {useState, useEffect} from 'react';
import axios from 'axios';

import Product from './Product';

function Products(props) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () =>{
            const {data: response} = await axios.get('http://localhost:8080/products');
            setProducts(response.data);
        }
        fetchData();
    }, []);

    return (
        <div style={{border: '1px solid black', display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column'}}>
            <h1>Product List</h1>
            {products && products?.map(element => 
                <Product key={element.id} element={element}/>
            )}
        </div>
    )
}

export default Products;
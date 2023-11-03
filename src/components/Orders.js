import {useState, useEffect} from 'react';
import axios from 'axios';

import Order from './Order';

function Orders(props) {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const fetchData = async () =>{
            const {data: response} = await axios.get('http://localhost:8080/orders');
            console.log('ORDER ',   response.data);
            setOrders(response.data);
        }
        fetchData();
    }, []);

    return (
        <div style={{border: '1px solid black', display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column'}}>
            <h1>Order List</h1>
            {orders && orders?.map(element => 
                <Order key={element.id} element={element}/>
            )}
        </div>
    )
}

export default Orders;
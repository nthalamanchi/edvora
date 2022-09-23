import React, {useContext} from "react";
import { store } from "../Home/Main";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const Orderdetails = () =>{
    const[storedata,setstoredata]=useContext(store)

     return (
    <>
    <Container className='d-flex flex-wrap'>
      {
        storedata.Orders.map((item,index)=>(
           <Card style={{ width: '18rem' }} key={index} className='shadow p-3 m-5 bg-white rounded text-center'>
              <p>Order Id #{item.order_id}</p>
              <Card.Body >
              <Card.Title>{item.product_id}</Card.Title>
              <Card.Text>No.of Items Remaining - {item.quantity}</Card.Text>
              </Card.Body>
           </Card>
        ))
    }
    </Container>
    </>  
  )
}

export default Orderdetails
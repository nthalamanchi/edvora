import React, {useContext} from "react";
import { store } from "../Home/Main";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Header from "../Home/Header";


const Valuablecustomers = () =>{
  const[storedata,setstoredata]=useContext(store)
  return (
    <>
    <Header/>
    <div className="text-center text-capitalize fs-1 m-3">
    <p className="badge bg-primary text-wrap" >Our Top Customers</p>
    </div>
     <Container className='d-flex flex-wrap'>
     {
        storedata.Customers.map((item,index)=>(
          
            <Card style={{ width: '18rem' }} key={index} className='shadow p-3 m-5 bg-white rounded text-center'>
              <Card.Body >
              <Card.Title>{item.user_id}</Card.Title>
              <Card.Text>{item.name}</Card.Text>
              </Card.Body>
           </Card>
        ))
    }
    </Container>
    </>
  )
}

export default Valuablecustomers
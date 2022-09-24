import React, {useContext} from "react";
import { store } from "../Home/Main";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Header from "../Home/Header";

const Products = () =>{
  const[storedata,setstoredata]=useContext(store)
  return (
    <>
    <Header/>
    <h3 className="bg-info text-white text-center text-uppercase font-weight-bold mt-2 mb-2 pt-2 pb-2">Data Visualization</h3>
     <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
      <LineChart data={storedata.Products}
        margin={{top:50,right: 100,left: 20,bottom: 20}}>
        <CartesianGrid strokeDasharray="5 3" />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey='stock' stroke="#00FF00" />
        <Line type="monotone" dataKey='selling_price' stroke="#FF0000" />
    </LineChart>
      </ResponsiveContainer>
    </div>
    <p className="text-center text-uppercase font-weight-bold">Data Analysis of items,based on stocks and selling price</p>
    <Container>
       <Table className="text-center table table-striped table-bordered table-hover table-condensed">
       <tbody>
       <tr>
          <th>S.NO</th>
          <th>NAME</th>
          <th>Stock</th>
          <th>SellingPrice</th>
      </tr>
      {storedata.Products.map((item) => (
            <tr key={item.product_id}>
                <td>{item.product_id}</td>
                <td>{item.name}</td>
                <td>{item.selling_price}</td>
                <td>{item.stock}</td>
            </tr>
      ))}
      </tbody>
      </Table>
    </Container>
    </>
    
    
  )
}

export default Products
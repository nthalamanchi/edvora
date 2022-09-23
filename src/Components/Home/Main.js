import React, { useEffect, useState , createContext} from "react";
import { Routes,Route } from 'react-router-dom'
import axios from 'axios'
import Orderdetails from "../Orderdetails/Orderdetails";
import Products from "../Products/Products";
import Valuablecustomers from "../Valuablecustomers/Valuablecustomers";
import Header from "./Header";
import Home from "./Home";

export const store = createContext();

const Main = ()=>{
   const [storedata, setstoredata] = useState({ Orders:[], Products:[], Customers:[] });
    useEffect(() => {
    const fetchData = async () => {
      const Orderdetails = await axios(
        'https://assessment.api.vweb.app/orders'
      );
      const Productdetails = await axios(
        'https://assessment.api.vweb.app/products'
      );
      const Customerdetails = await axios(
        'https://assessment.api.vweb.app/users '
      );

    setstoredata({ Orders: Orderdetails.data, Products: Productdetails.data,Customers:Customerdetails.data });
    };
    fetchData();
  }, []);

    return(
      <store.Provider value={[storedata,setstoredata]}>
          <div>
            <Header/>
        <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/Valuablecustomers' exact element={<Valuablecustomers/>}/>
        <Route path='/Products' exact element={<Products/>}/>
        <Route path='/Orderdetails' exact element={<Orderdetails/>}/>
        </Routes>
      </div>

      </store.Provider>
        
    )
}

export default Main
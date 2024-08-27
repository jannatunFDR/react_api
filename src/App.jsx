import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col} from "react-bootstrap";
import "./App.css"

function App() {

  let [product,setProduct] = useState ([]);


   let getData = () =>{
       axios.get("https://dummyjson.com/products").then((respons)=>{

        setProduct(respons.data.products);
        
        

       });
   };
  
   

  useEffect(() => {
    getData()
     
  },[]);


  return (
    <>
    <Container>
      <Row>
        
        {product.map((item,i) => (
          <Col key={i} lg={3}>
          <div className="evaly">
            <h4>{item.id}.</h4>
          <img src={item.thumbnail} alt="" />
          <h5>{item.title}</h5>
          {/* <p>{item.description}</p> */}
          <h2>${item.price}</h2>
           
          <h6>{item.discountPercentage}% Discount</h6>
          <h3>{item.stock} stock | {item.rating} ****(reviwes)</h3>
          
          
         </div>
          
          
          </Col>

        ))}
         
        
        
      </Row>
    </Container>
      
    </>
  )
}

export default App

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector( state => state.allProducts.products )
   const renderList = products.map( product => {
       const {id, title, image, price, category } = product;
       return (
        <div className="col-md-3 my-3" key={id}>
            <Link style={{textDecoration:'none'}} to={`/product/${id}`}>
        <Card style={{height:'420px'}}>
        <Card.Img className="p-5" variant="top" style ={{height:'250px'}} src={image} />
         <Card.Body>
        <div className="text-center">
      <Card.Title >{title}</Card.Title>
             <Card.Text> 
          <h6></h6> 
                <p></p>
           </Card.Text>
    <a style={{fontSize:'22px'}}>$ {price}</a> 
                    
                </div>
            </Card.Body>
        </Card>
        </Link>
        </div>
       )
   })
    return (
        <>  
    {
        renderList
    }
    
       </> 
    );
};

export default ProductComponent;
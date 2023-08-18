import React, { useEffect, useState } from 'react'
import Carousel from '../Carousel/Carousel'

export default function Suggestions() {
    const [products, setProducts] = useState([]);

    // FETCH PRODUCTS DATA FROM JSON-SERVER
    async function fetchProducts() {
        try {
            const response = await fetch('http://localhost:5000/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchProducts()
    }, [])
        
    return (
        <div className='Suggestions'>
            <div className='col-12'>
                <h1>YOU MAY ALSO LIKE</h1>
                <Carousel data={products}/>
            </div>
        </div>
    )
}

import ProductNav from '../../Components/SingleProduct/ProductNav'
import ProductPanel from '../../Components/SingleProduct/ProductPanel';
import Suggestions from '../../Components/SingleProduct/Suggestions';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';


export default function ProductDetails() {

    const { id } = useParams();

    const fetchProductById = (id) => axios.get(`http://localhost:5000/products/${id}`);
  
    const { data: product } = useQuery(['product', id], () => fetchProductById(id));
        
    useEffect(() => { window.scrollTo(0, 0) }, []);

    return (
        <>
            <Header />
            <section className='container d-flex flex-column g-5'>
                <ProductNav />
                <ProductPanel product={product?.data} />
                <Suggestions />
            </section>
            <Footer />
        </>
    )
}

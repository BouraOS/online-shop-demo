import React, { useEffect } from 'react'
import ProductNav from '../../Components/SingleProduct/ProductNav'
import { useParams } from 'react-router-dom';
import ProductPanel from '../../Components/SingleProduct/ProductPanel';
import Suggestions from '../../Components/SingleProduct/Suggestions';
import { useGetSingleProductQuery } from '../../Redux/ApiCalls/productsApi';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

export default function ProductDetails() {
    const { id } = useParams();
    const { data: singleProduct } = useGetSingleProductQuery(id);

    useEffect(() => {
        console.log(singleProduct)
        window.scrollTo(0, 0);
    }, [singleProduct])

    return (
        <>
            <Header />
            <section className='container d-flex flex-column g-5'>
                <ProductNav prodName={singleProduct?.nameEn} />
                {singleProduct && <ProductPanel product={singleProduct} />}
                <Suggestions />
            </section>
            <Footer />
        </>
    )
}

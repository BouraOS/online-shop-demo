import React from 'react'
import Card from '../Card/Card'
import { useAllProducts } from '../../Hooks/Hooks';
import { ScaleLoader } from 'react-spinners';

export default function ProductsMainCards({data}) {

    const items = useAllProducts();

    if(items.isLoading) {
        return (
        <div className='d-flex justify-content-center'>
            <ScaleLoader color="#BA0C2F" height={35} width={10}/>
        </div>
        )
    }

    return (
        <div class="row g-3">
            {
            data?.map((product) =>
                <div class="col-12 col-sm-6 col-lg-4" key={product.id}>
                    <Card product={product} />
                </div>
            )}
        </div>
    )
}

import React from 'react'
import Card from '../Card/Card'

export default function ProductsMainCards({ProductsData}) {
    return (
        <div class="row g-3">
            {
            ProductsData.map((product) =>
                <div class="col-12 col-sm-6 col-lg-4" key={product.id}>
                    <Card product={product} />
                </div>
            )}
        </div>
    )
}

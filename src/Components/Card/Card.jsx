import { Link } from "react-router-dom"
import "./card.css"

export default function Card({ product }) {
    return (
        <Link to={`/products/${product?.id}`} className="ProductSliderItem" >
            <div className="thumbnail">
                <img src={product?.image} alt={product?.nameEn} />
            </div>
            <div className="product-item-heading">
                <h5>{product?.nameEn}</h5>
                <span>By {product?.brand}</span>
            </div>
            <div className="product-item-footer">
                <div className="item-pricing">
                    {
                        product?.newPrice ? <><span className="price">{product?.price.toFixed(2)}$</span> <span className="new-price">{product?.newPrice.toFixed(2)}$</span></>
                            : <><span></span><span className="new-price">{product?.price.toFixed(2)}$</span></>
                    }
                </div>
                <button type='button'>Add to cart</button>
            </div>
        </Link>
    )
}
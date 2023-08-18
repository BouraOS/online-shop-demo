import React from 'react'

export default function ProductPanel({product}) {
  return (
      <section className="mt-3">
          <div className="panel row" id='panel'>
              <div className="prod-gallory col-12 col-md-5 me-auto">
                  <div className="pro-img-details">
                      <img src={product?.image} alt="" id="full-img-width" />
                  </div>
              </div>
              <div className="prod-detail col-12 col-md-6">
                  <div className="product-item-heading">
                      <h2>{product?.nameEn}</h2>
                      <span>By {product?.brand}</span>
                  </div>
                  <div className="item-pricing">
                      {product?.newPrice ? <><span className="price">{product?.price.toFixed(2)}$</span> <span className="new-price">{product?.newPrice.toFixed(2)}$</span></>
                          : <><span></span><span className="new-price">{product?.price.toFixed(2)}$</span></>}
                  </div>
                  <div className="form-group">
                      <label>Quantity</label>
                      <input type="number" placeholder="1" className="form-control quantity" />
                  </div>
                  <p>{product?.descriptionEn}</p>
                  <button type='button'><i className="fa-solid fa-cart-plus"></i> Add to Cart</button>
              </div>
          </div>
      </section>
  )
}

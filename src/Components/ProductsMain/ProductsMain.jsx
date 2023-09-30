import './ProductsMain.css'
import ProductsMainCards from './ProductsMainCards';
import Recommended from './Recommended';

export default function ProductsMain({data}) {

  return (
    <div className="d-flex flex-column gap-5">
      <Recommended />
      <ProductsMainCards data={data}/>
    </div>
  )
}


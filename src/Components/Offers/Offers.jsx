import axios from 'axios';
import { useQuery } from 'react-query';
import Card from "../Card/Card";

const getData = async (tagNames) => {
	const response = await axios.get(`http://localhost:5000/products?tagNames=${tagNames}`);
  return response.data;
}

export default function Offers({title, query}) {

  const { data: Productdata } = useQuery(['productsData',query],() => getData(query) )

  return (
    <section className="container mb-5">
        <div className='grand-title container mt-4'>
          <h2>{title}</h2>
          <span></span>
        </div>
        <div className="wrapper row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
            <div className="col">
                <Card product={Productdata?.[0]}/>
            </div>
            <div className="col">
                <Card product={Productdata?.[1]}/>
            </div>
            <div className="col">
                <Card product={Productdata?.[2]}/>
            </div>
            <div className="col">
                <Card product={Productdata?.[3]}/>
            </div>
        </div>
        

      </section>
  )
}

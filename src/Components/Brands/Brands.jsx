import axios from 'axios';
import { useQuery } from 'react-query';

const getData = async () => {
	const response = await axios.get(`http://localhost:5000/brands`);
  return response.data;
}

export default function Brands() {

  const { data: brandsData } = useQuery('brandsData', getData )

  return (
    <section className='container mb-5'>
      <div className='grand-title container mt-4'>
        <h2>OUR BRANDS</h2>
        <span></span>
      </div>
      <div className="wrapper row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 g-0">
        {
          brandsData?.map(brand => (
            <div className="col" key={brand.id}>
              <img src={brand.imageName} alt="" width={150} height={150} />
            </div>
          )
          )
        }
      </div>
    </section>
  )
}

import React, {useState} from 'react'
import './ProductsMain.css'
import ProductsMainCards from './ProductsMainCards'
import { useSearchParams } from 'react-router-dom';
import ProductsMainNav from './ProductsMainNav';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useGetAllProductsQuery} from '../../Redux/ApiCalls/productsApi';

export default function ProductsMain() {
  // GET DATA
  const { data: allProductsData } = useGetAllProductsQuery();
  
  // GET Params DATA 
  const [searchParams] = useSearchParams()
  const tagName = searchParams.get("tagName")

  const filteredData = tagName ? allProductsData?.filter((prod) => prod.tagNames.toLowerCase() === tagName)
  : allProductsData

  // Pagination 
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const totalproduct = filteredData?.length
  const productsPerPage = 9;

  // Get Current Products
  const indexOfLast = page * productsPerPage; //1 * 9 = 9
  const indexOfFirst = indexOfLast - productsPerPage; // 9 - 9 = 0

  const currentProducts = filteredData?.slice(indexOfFirst, indexOfLast); // slice(0,9)

  const pageNumbers = Math.ceil(totalproduct / productsPerPage)

  return (
    <div className="row col-12 col-md-8 col-lg-9">
      <ProductsMainNav/>
      <Stack spacing={2}>
        <div class="row g-3">
          {currentProducts && <ProductsMainCards ProductsData={currentProducts} />}
        </div>
        <Pagination
          style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
          count={pageNumbers} page={page} onChange={handleChange} size="large" shape="rounded" color="error" />
      </Stack>
    </div>
  )
}


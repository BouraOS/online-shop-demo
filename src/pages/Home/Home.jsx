// import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/Banner/Banner'
import Offers from '../../Components/Offers/Offers'
import Brands from '../../Components/Brands/Brands';
import Responsibility from '../../Components/Responsibility/Responsibility';
import { useGetAllProductsQuery, useGetBrandsQuery } from '../../Redux/ApiCalls/productsApi'

export default function Home() {
  const { data: allProductsData } = useGetAllProductsQuery();
  const { data: brandsData } = useGetBrandsQuery();

  console.log(allProductsData)
  console.log(brandsData)


  return (
    <>
      <Header />
      <div className='home-page'>
        <Banner />
        <Offers title="Best Sellers" query="Best_sellers" data={allProductsData} />
        <Offers title="Great deals" query="Great_deals" data={allProductsData} />
        <Offers title="New Products" query="Newest" data={allProductsData} />
        <Brands brandsData={brandsData} />
        <Responsibility />
      </div>
      <Footer />
    </>
  )
}

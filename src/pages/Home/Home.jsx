// import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/Banner/Banner'
import Offers from '../../Components/Offers/Offers'
import Brands from '../../Components/Brands/Brands';
import Responsibility from '../../Components/Responsibility/Responsibility';


export default function Home() {


  return (
    <>
      <Header />
      <div className='home-page'>
        <Banner />
        <Offers title="Best Sellers" query="Best_sellers"/>
        <Offers title="Great deals" query="Great_deals"/>
        <Offers title="New Products" query="Newest"/>
        <Brands />
        <Responsibility />
      </div>
      <Footer />
    </>
  )
}

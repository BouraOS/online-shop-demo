import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ProductsMain from "../../Components/ProductsMain/ProductsMain";
import ProductsTopNav from "../../Components/PruductsTopNav/ProductsTopNav";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useMemo } from "react";
import { useAllProducts } from "../../Hooks/Hooks";


export default function Products() {

  //** ---- GET ALL PRODUCTS DATA --------- */
  const items = useAllProducts();
  const allProducts = useMemo(() => items.data ?? [], [items.data]);

    return (
    <>
      <Header />
      <div className="container-xl mt-5 mb-5">
        <ProductsTopNav />
        <div className="row">
          <div className="Sidebar col-4 col-lg-3 d-none d-md-block mt-md-3">
            <Sidebar />
          </div>
          <div className="row col-12 col-md-8 col-lg-9">
            <ProductsMain data={allProducts} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
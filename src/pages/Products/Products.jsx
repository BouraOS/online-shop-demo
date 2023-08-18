import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ProductsMain from "../../Components/ProductsMain/ProductsMain";
import ProductsTopNav from "../../Components/PruductsTopNav/ProductsTopNav";
import Sidebar from "../../Components/Sidebar/Sidebar";

export default function Products() {


  return (
    <>
      <Header />
      <div className="container-xl mt-5 mb-5">
        <ProductsTopNav />
        <div className="row">
          <Sidebar />
          <ProductsMain/>
        </div>
      </div>
      <Footer />
    </>
  )
}
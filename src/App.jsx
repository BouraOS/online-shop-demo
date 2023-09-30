import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import About from './pages/About/About';
import ProductDetails from './pages/ProductDetails/ProductDetails';

import { QueryClientProvider} from 'react-query'
import { queryClient } from './Api/ApiCalls';

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='products' element={<Products />} />
            <Route exact path="products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;

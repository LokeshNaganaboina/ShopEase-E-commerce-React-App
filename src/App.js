import Header from './components/Layouts/header';
import Product from './components/productsList/Products';
import SubHeader from './components/Layouts/subHeader';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <SubHeader></SubHeader>
          <Routes>
            <Route path="/:category?" element={<Product></Product>} />
            <Route path="/" element={<Product />} />
            <Route path="*" element={<h1>Not Found!!</h1>} />
          </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;

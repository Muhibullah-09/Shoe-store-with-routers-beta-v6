import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes , Route, Link, useParams } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import NotFound from './components/NotFound';


const ProductsIndex = () => {
  return(
    <div>
      <ul>
        {Object.entries(shoes).map(([productID , { name , img }]) => (
          <li key = {productID}>
            <Link to = {`/Products/${productID}`}>
              <h2>{name}</h2>
              <img src = {img} alt={name}/>
            </Link>
          </li>
        ))}
      </ul>
    </div>  
  );
}

const ProductDetails = () =>{
  const { productID } = useParams();
  const shoe = shoes[productID];

  if (!shoe){
    return <h2>Not Found</h2>
  }

  const { name , img } = shoe;

  return(
    <div>
    <h2>{name}</h2>
    <img src = {img} alt = {name} />
    </div>
  )
}

const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  }
};
function App() {
  return (
    <Router>
        <nav>
          <Header />
        </nav>
        <Routes>
          <Route path = '/' element = {<Home/>}></Route>
          <Route path = 'products' element = {<Products/>}>
            <Route path = '/' element = {<ProductsIndex/>}></Route>
            <Route path = ':productID' element = {<ProductDetails/>}></Route>
          </Route>
          <Route path = '*' element = {<NotFound/>}></Route>
        </Routes>
    </Router>
  );
}
export default App
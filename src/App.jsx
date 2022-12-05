import './App.css';
import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import Footer from './components/Footer.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer.jsx';


function App() {
  return (
          <BrowserRouter>
            <Navbar />
            <div className="container container-generico">
              <Routes>
                    <Route path="/" element={<ItemListContainer/>} />
                    <Route path="/category/:categoryID" element={ <ItemListContainer/>} />
                    <Route path="/item/:itemID" element={<ItemDetailContainer/>} />
              </Routes>
            </div>
            <Footer/>
            </BrowserRouter>
  );
}

export default App;

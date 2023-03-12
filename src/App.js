
import './App.css';
import Nav from './Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './Footer';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
     <Routes>
      <Route path='/' element={<h1>Product List</h1>}></Route>
      <Route path='/add' element={<h1> Add Product</h1>}></Route>
      <Route path='/update' element={<h1>Update Product</h1>}></Route>
      <Route path='/logout' element={<h1>Logout</h1>}></Route>
      <Route path='/profile' element={<h1>Profile</h1>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
     </Routes>

      </BrowserRouter>

       <Footer/>

    </div>
  );
}

export default App;

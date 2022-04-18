import './App.css';
import Home from './Components/Home/Home/Home';
import Header from './Components/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Services from './Components/Home/Services/Services';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
      </Routes>




      <Footer></Footer>
    </div>
  );
}

export default App;

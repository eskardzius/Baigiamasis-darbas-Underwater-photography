import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/Home'
import Cards from './components/pages/Cards';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import About from './components/pages/About';
import Shop from './components/pages/Shop';
import Portfolio from './components/pages/Portfolio';

const App = () => {
  return (
    <>
    <Header />
    <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/mycards'>
         <Route path='portfolio' element={<Portfolio />} />
        </Route>
        <Route path='/cards'>
          <Route path='allCards' element={<Cards />}/>
        </Route>
        <Route path='/shop' element={<Shop />} />
        <Route path='/user'>
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
        </Route>
      </Routes>
    </main>
    <Footer />
    </>
  );
}

export default App;
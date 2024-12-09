import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import Layout from './components/paginas/Layout';
import Home from './components/paginas/Home';
import NoPage from './components/paginas/NoPage';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/category/:idCategory" element={<ItemListContainer/>} />
          <Route path="*" element={<NoPage />} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
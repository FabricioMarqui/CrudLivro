import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Paginas/Home';
import Sobre from './Paginas/Sobre';
import Layout from './Layout';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

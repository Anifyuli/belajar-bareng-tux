import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutPage } from './pages/about';
import Navbar from './components/ui/navbar';
import { HomePage } from './pages/home';
import { Footer } from './components/footer';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={''} />
          <Route path="/recomendations" element={''} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

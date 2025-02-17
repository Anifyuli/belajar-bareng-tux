import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { News } from './pages/news';
import Navbar from './components/ui/navbar';
import { HomePage } from './pages/home';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={""} />
          <Route path="/services" element={""} />
          <Route path="/contact" element={""} />
          <Route path="/news" element={<News />} />
        </Routes>
        <div>
          <HomePage />
        </div>
      </BrowserRouter>
    </>
  );
}

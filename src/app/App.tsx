import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/app/pages/HomePage';
import AboutPage from '@/app/pages/AboutPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  );
}

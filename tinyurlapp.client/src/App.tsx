import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from '@/pages/index';
import Redirect from '@/pages/redirect';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path=":shortUrl" element={<Redirect />} />
        <Route index element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

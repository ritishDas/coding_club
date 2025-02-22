import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import App from './App.jsx'
import Join from './pages/join'
import Members from './pages/members'
import Footer from './components/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/join" element={<Join />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  </StrictMode>,
)

import { AnimatePresence } from 'framer-motion'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Characters from '../pages/Characters'
import Gameplay from '../pages/Gameplay'
import Contact from '../pages/Contact'
import Footer from './Footer'

const AppContent = () => {
  useScrollToTop(); // Auto scroll to top on route change

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Characters />} />
          <Route path="/skills" element={<Gameplay />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default AppContent 
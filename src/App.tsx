import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MinecraftWorld from './pages/MinecraftWorld';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MinecraftWorld />} />
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/skills" element={<Navigate to="/#skills" replace />} />
        <Route path="/projects" element={<Navigate to="/#projects" replace />} />
        <Route path="/journey" element={<Navigate to="/#achievements" replace />} />
        <Route path="/certifications" element={<Navigate to="/#achievements" replace />} />
        <Route path="/services" element={<Navigate to="/#skills" replace />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

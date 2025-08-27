import './App.css';
import { Navigate, Route } from 'react-router-dom';
import { Footer, Navbar, RoutesWithNotFound } from './components';
import { Home } from './pages';
import { Dashboard } from './pages';

function App() {
  return (
    <>
      <Navbar />

      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </RoutesWithNotFound>

      <Footer />
    </>
  );
}

export default App;

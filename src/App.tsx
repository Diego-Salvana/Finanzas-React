import { Navigate, Route } from 'react-router-dom';
import { RoutesWithNotFound, ThemeButton } from './components';
import { Home } from './pages';
import { Dashboard } from './pages';

function App() {
  return (
    <>
      <div>
        <ThemeButton />
      </div>

      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </RoutesWithNotFound>
    </>
  );
}

export default App;

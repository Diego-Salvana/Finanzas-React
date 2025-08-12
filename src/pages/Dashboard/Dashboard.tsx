import { Route } from 'react-router-dom';
import { RoutesWithNotFound } from '../../components';

export function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>

      <RoutesWithNotFound>
        <Route path="/panel" element={<h2>Panel</h2>} />
        <Route path="/calculator" element={<h2>Calculadora</h2>} />
      </RoutesWithNotFound>
    </>
  );
}

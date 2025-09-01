import './Dashboard.css';
import { Link, Navigate, Route, useLocation } from 'react-router-dom';
import { Comparator, DollarPanel, RoutesWithNotFound } from '../../components';
import { Button } from 'primereact/button';

export function Dashboard() {
  const location = useLocation();

  return (
    <>
      <main>
        <section className="px-4 lg:px-6 xl:px-8 py-6 flex justify-content-center flex-wrap gap-3">
          <Link to={'/dashboard/panel'}>
            <Button
              label="Dólar"
              raised
              rounded
              severity={location.pathname.includes('/panel') ? undefined : 'secondary'}
              className="text-xl py-3 w-18rem btn-section"
            />
          </Link>
          <Link to={'/dashboard/comparator'}>
            <Button
              label="Cuotas vs Efectivo"
              raised
              rounded
              severity={location.pathname.includes('/comparator') ? undefined : 'secondary'}
              className="text-xl py-3 w-18rem btn-section"
            />
          </Link>
        </section>

        <section className="px-4 lg:px-6 xl:px-8">
          <RoutesWithNotFound>
            <Route path="/" element={<Navigate to="panel" />} />
            <Route path="/panel" element={<DollarPanel />} />
            <Route path="/comparator" element={<Comparator />} />
          </RoutesWithNotFound>
        </section>
      </main>
    </>
  );
}

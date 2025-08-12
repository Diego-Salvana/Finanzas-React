import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFound } from '../../pages';
import type { PropsWithChildren } from 'react';

export function RoutesWithNotFound({ children }: PropsWithChildren) {
  return (
    <Routes>
      {children}

      <Route path="*" element={<Navigate to="/404" replace />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  );
}

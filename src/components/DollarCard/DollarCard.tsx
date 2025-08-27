import './DollarCard.css';
import { Card } from 'primereact/card';
import type { Dollar } from '../../interfaces';

interface Props {
  dollar: Dollar;
}

export function DollarCard({ dollar }: Props) {
  function namePipe(name: string): string {
    switch (name) {
      case 'Bolsa':
        return 'MEP';
      case 'Contado con liquidación':
        return 'CCL';
      default:
        return name;
    }
  }

  function pricePipe(price: number): string {
    return price.toLocaleString('es-AR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  function datePipe(date: string): string {
    return new Date(date).toLocaleDateString('es-AR', {
      year: '2-digit',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: false
    });
  }

  return (
    <Card>
      <h2 className="font-semibold m-0 text-center">Dólar {namePipe(dollar.nombre)}</h2>

      <div className="flex justify-content-between align-items-start mt-3">
        <div className="w-5 text-center">
          <span className="text-3xl sm:text-4xl font-bold text-color-primary">
            {pricePipe(dollar.compra)}
          </span>
          <p className="font-medium m-0 text-color-gray-500">Compra</p>
        </div>
        <div className="w-5 text-center">
          <span className="text-3xl sm:text-4xl font-bold text-color-primary">
            {pricePipe(dollar.compra)}
          </span>
          <p className="font-medium m-0 text-color-gray-500">Venta</p>
        </div>
      </div>

      <p className="mb-0 mt-3 text-right text-sm text-color-gray-500">
        Actualización: {datePipe(dollar.fechaActualizacion)}
      </p>
    </Card>
  );
}

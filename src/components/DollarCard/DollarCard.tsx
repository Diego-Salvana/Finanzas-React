import './DollarCard.css';
import { Card } from 'primereact/card';
import type { Dollar } from '../../interfaces';
import { datePipe, dollarNamePipe, pricePipe } from '../../utils';

interface Props {
  dollar: Dollar;
}

export function DollarCard({ dollar }: Props) {
  return (
    <Card>
      <h2 className="font-semibold m-0 text-center">Dólar {dollarNamePipe(dollar.nombre)}</h2>

      <div className="flex justify-content-between align-items-start mt-3">
        <div className="w-5 text-center">
          <span className="text-3xl sm:text-4xl font-bold text-primary">
            {pricePipe(dollar.compra)}
          </span>
          <p className="font-medium m-0 text-gray-500">Compra</p>
        </div>
        <div className="w-5 text-center">
          <span className="text-3xl sm:text-4xl font-bold text-primary">
            {pricePipe(dollar.compra)}
          </span>
          <p className="font-medium m-0 text-gray-500">Venta</p>
        </div>
      </div>

      <p className="mb-0 mt-3 text-right text-sm text-gray-500">
        Actualización: {datePipe(dollar.fechaActualizacion)}
      </p>
    </Card>
  );
}

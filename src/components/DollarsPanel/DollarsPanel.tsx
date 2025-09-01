import './DollarPanel.css';
import { useEffect, useState } from 'react';
import { Skeleton } from 'primereact/skeleton';
import type { Dollar } from '../../interfaces/dollar.interface';
import { DollarCard } from '../DollarCard/DollarCard';

export function DollarPanel() {
  const [dollarList, setDollarList] = useState<Dollar[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const skeletons = Array(6).fill(null);
  const apiUrl = 'https://dolarapi.com/v1/dolares';

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then((data: Dollar[]) => {
        setDollarList(data.filter(dollar => dollar.casa !== 'mayorista'));
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <div className="grid justify-content-center gap-3">
        {isLoading &&
          skeletons.map((_, index) => (
            <Skeleton
              key={index}
              className="col-12 md:col-6 max-w-25rem"
              height="210px"
              borderRadius="6px"
            />
          ))}

        {!isLoading &&
          dollarList &&
          dollarList.map((dollar, index) => (
            <div key={index} className="col-12 md:col-6 max-w-25rem">
              <DollarCard dollar={dollar} />
            </div>
          ))}

        {!isLoading && !dollarList && <h2>No se pudo obtener la información.</h2>}
      </div>

      <p className="text-center text-color-gray-500 mt-4">Datos obtenidos de DolarApi.com</p>
    </>
  );
}

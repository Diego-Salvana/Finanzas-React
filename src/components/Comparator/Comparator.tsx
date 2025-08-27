import './Comparator.css';

export function Comparator() {
  return (
    <>
      <div className="card flex justify-content-center pb-5">
        {/* Acordion Table  */}
        <p>
          El comparador utiliza el modelo de renta fija pospagable, donde inviertes un monto inicial
          calculado para cubrir todas las cuotas de la financiación.
        </p>
        <p>Así es como funciona:</p>
        <ul>
          <li>Realizas una inversión inicial.</li>
          <li>
            Cada mes, retiras de la inversión el monto necesario para pagar la cuota correspondiente.
          </li>
          <li>
            Los intereses generados por la inversión permiten mantener el capital suficiente para cubrir
            las cuotas restantes.
          </li>
        </ul>
        <p>
          De esta forma, puedes financiar tu compra mientras aprovechas el rendimiento de tu inversión.
        </p>
      </div>

      <div className="form-container">
        <form>
          <div className="surface-card p-4 border-round border-2 border-primary p-fluid">
            <div className="grid formgrid justify-content-around p-fluid">
              <div className="col-12 md:col-6 xl:pr-3">
                <h2 className="text-center text-primary">Compra en Cuotas</h2>
                <div className="field mb-4">
                  <label htmlFor="price" className="font-semibold text-900">
                    Precio Efectivo
                  </label>
                  <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">$</span>
                    {/* Input primereact */}
                  </div>
                  <div className="field mb-4">
                    <label htmlFor="interest" className="font-semibold text-900">
                      Interés
                    </label>
                    <div className="p-inputgroup">
                      <span className="p-inputgroup-addon">%</span>
                      {/* Input primereact */}
                    </div>
                  </div>
                  <div className="field mb-4">
                    <label htmlFor="installments" className="font-semibold text-900">
                      Cantidad de Coutas
                    </label>
                    <div className="p-inputgroup">
                      <span className="p-inputgroup-addon">N°</span>
                      {/* Input primereact */}
                    </div>
                  </div>
                  <div className="field mb-4">
                    <label htmlFor="price" className="font-semibold text-900">
                      Valor de la Cuota
                    </label>
                    <div className="text-2xl font-semibold text-600 pl-2">
                      <span>$ </span>
                      <span>precio de cuota</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 md:col-6 xl:pl-3">
                  <h2 className="text-center text-primary">Inversión</h2>
                  <div className="field mb-4">
                    <label htmlFor="expected_return" className="font-semibold text-900">
                      Retorno Esperado
                    </label>
                    <div className="p-inputgroup">
                      <span className="p-inputgroup-addon">%</span>
                      {/* Input primereact */}
                    </div>
                  </div>
                  <div className="field mb-4">
                    <label htmlFor="price" className="font-semibold text-900">
                      Monto Inicial de Inversión
                    </label>
                    <div className="text-2xl font-semibold text-600 pl-2">
                      <span>$ </span>
                      <span>Monto</span>
                    </div>
                  </div>
                  <div className="field mb-4 text-right clean">
                    <button>Limpiar formulario</button>
                  </div>
                </div>

                <div className="surface-border border-top-1 mb-4 col-12"></div>

                <div className="field mb-4 col-12">
                  <div className="border-1 border-round-md border-300 px-4 text-lg result">
                    <p>
                      Basado en los cálculos realizados, es más conveniente{' '}
                      <b>financiar la compra en cuotas</b> e invertir un monto inicial de
                      <strong>Monto</strong>.
                    </p>
                    <p>
                      Según las condiciones actuales, resulta más conveniente realizar la{' '}
                      <b>compra al contado</b> por
                      <strong>$numero de algo</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

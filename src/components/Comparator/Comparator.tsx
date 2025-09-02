import './Comparator.css';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import { InputNumber, type InputNumberChangeEvent } from 'primereact/inputnumber';
import { useState, type MouseEvent } from 'react';
import type { ComparatorForm } from '../../interfaces';
import { pricePipe } from '../../utils';

const InitialForm: ComparatorForm = {
  price: 0,
  interest: 0,
  installments: 0,
  expectedReturn: 0
};

export function Comparator() {
  const [form, setForm] = useState<ComparatorForm>(InitialForm);
  const installmentsValue: number | null = calculateInstallmentsValue(form);
  const initialAmount: number | null = calculateInitialAmoutn(form, installmentsValue);

  function handleFormChange(event: InputNumberChangeEvent) {
    const input = event.originalEvent.target as HTMLInputElement;

    setForm({ ...form, [input.name]: event.value ?? 0 });
  }

  function handleClear(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    event.preventDefault();

    setForm(InitialForm);
  }

  function calculateInstallmentsValue(form: ComparatorForm): number | null {
    if (form.price > 0 && form.installments > 0) {
      return (form.price * (1 + form.interest / 100)) / form.installments;
    } else {
      return null;
    }
  }

  function calculateInitialAmoutn(form: ComparatorForm, installmentsValue: number | null): number | null {
    if (installmentsValue && form.expectedReturn > 0) {
      return (
        (installmentsValue * (1 - Math.pow(1 + form.expectedReturn / 100, -form.installments))) /
        (form.expectedReturn / 100)
      );
    } else {
      return null;
    }
  }

  return (
    <>
      <div className="card flex justify-content-center pb-5">
        <Accordion activeIndex={0} className="w-full">
          <AccordionTab header="¿Cómo usar este comparador?">
            <p>
              Este formulario te ayuda a decidir si es mejor comprar un producto al contado o financiarlo
              en cuotas mientras realizas una inversión.
            </p>
            <p>Solo necesitas ingresar:</p>
            <ul>
              <li>El precio del producto.</li>
              <li>El número de cuotas y la tasa de interés aplicable.</li>
              <li>La tasa de retorno esperada para tu inversión. (Mensual)</li>
            </ul>
            <p>
              El comparador calculará el monto inicial que deberías invertir para cubrir los pagos de las
              cuotas y te indicará cuál es la opción más conveniente.
            </p>
          </AccordionTab>
          <AccordionTab header="¿Cómo se pagan las cuotas con la inversión?">
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
                Los intereses generados por la inversión permiten mantener el capital suficiente para
                cubrir las cuotas restantes.
              </li>
            </ul>
            <p>
              De esta forma, puedes financiar tu compra mientras aprovechas el rendimiento de tu
              inversión.
            </p>
          </AccordionTab>
        </Accordion>
      </div>

      <div className="form-container">
        <form>
          <div className="bg-card p-4 border-card border-2 border-primary p-fluid">
            <div className="grid formgrid justify-content-around p-fluid">
              <div className="col-12 md:col-6 xl:pr-3">
                <h2 className="text-center text-primary">Compra en Cuotas</h2>

                <div className="field mb-4">
                  <label htmlFor="price" className="font-semibold text-900">
                    Precio Efectivo
                  </label>
                  <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">$</span>
                    <InputNumber
                      inputId="price"
                      value={form.price > 0 ? form.price : null}
                      min={0}
                      maxFractionDigits={2}
                      locale="es-AR"
                      name="price"
                      onChange={handleFormChange}
                    />
                  </div>
                </div>

                <div className="field mb-4">
                  <label htmlFor="interest" className="font-semibold text-900">
                    Interés
                  </label>
                  <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">%</span>
                    <InputNumber
                      inputId="interest"
                      value={form.interest > 0 ? form.interest : null}
                      min={0}
                      maxFractionDigits={2}
                      locale="es-AR"
                      name="interest"
                      onChange={handleFormChange}
                    />
                  </div>
                </div>

                <div className="field mb-4">
                  <label htmlFor="installments" className="font-semibold text-900">
                    Cantidad de Coutas
                  </label>
                  <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">N°</span>
                    <InputNumber
                      inputId="installments"
                      value={form.installments > 0 ? form.installments : null}
                      min={0}
                      maxFractionDigits={2}
                      locale="es-AR"
                      name="installments"
                      onChange={handleFormChange}
                    />
                  </div>
                </div>

                <div className="field mb-4">
                  <label htmlFor="price" className="font-semibold text-900">
                    Valor de la Cuota
                  </label>
                  <div className="text-2xl font-semibold text-600 pl-2">
                    <span>$ </span>
                    <span>{installmentsValue ? pricePipe(installmentsValue) : '-'}</span>
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
                    <InputNumber
                      inputId="expected_return"
                      value={form.expectedReturn > 0 ? form.expectedReturn : null}
                      min={0}
                      maxFractionDigits={2}
                      locale="es-AR"
                      name="expectedReturn"
                      onChange={handleFormChange}
                    />
                  </div>
                </div>

                <div className="field mb-4">
                  <label htmlFor="price" className="font-semibold text-900">
                    Monto Inicial de Inversión
                  </label>
                  <div className="text-2xl font-semibold text-600 pl-2">
                    <span>$ </span>
                    {initialAmount ? pricePipe(initialAmount) : '-'}
                  </div>
                </div>

                <div className="field mb-4 text-right clean">
                  <Button
                    label="Limpiar Formulario"
                    severity="secondary"
                    outlined
                    className="w-12rem"
                    onClick={handleClear}
                  />
                </div>
              </div>

              <div className="surface-border border-top-1 mb-4 col-12"></div>

              <div className="field mb-4 col-12">
                <div className="border-1 border-round-md border-300 px-4 text-lg result">
                  {initialAmount && initialAmount < form.price && (
                    <p>
                      Basado en los cálculos realizados, es más conveniente{' '}
                      <b>financiar la compra en cuotas</b> e invertir un monto inicial de
                      <strong> ${pricePipe(initialAmount)}</strong>.
                    </p>
                  )}

                  {initialAmount && initialAmount > form.price && (
                    <p>
                      Según las condiciones actuales, resulta más conveniente realizar la{' '}
                      <b>compra al contado</b> por
                      <strong> ${pricePipe(form.price)}</strong>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

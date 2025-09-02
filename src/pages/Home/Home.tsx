import './Home.css';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { FeatureCard } from '../../components';
import { featuresData } from '../../data/features-list';

export function Home() {
  return (
    <>
      <header className="px-4 lg:px-6 xl:px-8 pb-8 pt-5 lg:pt-6 xl:pt-7">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-6 p-3 pr-5">
            <span className="text-teal-600 font-bold mb-4 block">IMPULSA TU DECISIÓN FINANCIERA</span>
            <div className="font-bold text-900 text-4xl lg:text-6xl mb-4">
              Toma el Control de tus Finanzas
            </div>
            <p className="mt-0 mb-5 text-700 line-height-3 text-lg lg:text-xl">
              Consulta la cotización actual del dólar en Argentina o compara si es más conveniente comprar
              en cuotas o en efectivo con nuestra herramienta financiera inteligente.
            </p>
            <div className="relative w-full xl:w-30rem">
              <Link to={'/dashboard/panel'}>
                <Button label="Empezar" icon="pi pi-arrow-right" iconPos="right" rounded />
              </Link>
            </div>
          </div>

          <div className="w-full lg:pr-3 xl:w-6 flex align-items-center justify-content-center xl:justify-content-end mt-5 xl:mt-0">
            <div className="img-container">
              <img src="/img/business.jpg" alt="Businnes-img" className="shadow-2 header-img" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="px-4 lg:px-6 xl:px-8 pt-2 pb-8  xl:pt-5">
          <div className="text-900 text-3xl font-bold text-center mb-3">
            Tecnologías detrás de esta página
          </div>

          <div className="grid mt-7">
            {featuresData.map((feature, index) => (
              <div key={index} className="col-12 md:col-4 p-2 text-center">
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

import './Footer.css';

export function Footer() {
  const year = new Date(Date.now()).getFullYear();

  return (
    <>
      <footer className="px-4 lg:px-6 xl:px-8 mt-5 w-full absolute bottom-0">
        <div className="py-6 flex flex-column align-items-center sm:flex-row sm:align-items-center justify-content-between border-top-1">
          <div>
            <div className="mt-2 line-height-3">© {year} Todos los derechos reservados</div>
          </div>

          <div className="mt-3 sm:mt-0">
            <a
              className="cursor-pointer text-500 ml-3"
              href="https://www.linkedin.com/in/diego-salvana"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="pi pi-linkedin text-xl social-link"></i>
            </a>
            <a
              className="cursor-pointer text-500 ml-3"
              href="https://github.com/Diego-Salvana/Finanzas-React"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="pi pi-github text-xl social-link"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

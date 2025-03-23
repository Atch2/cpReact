// objetivo: Nos permite crear una referencia mutable que persiste durante todo el ciclo de vida del componente
// SIN causar un re - render
// objetivo 2: hacer referencia a un elemento del DOM

// Ejemplo:
// Un marcador de un libro que utilizamos para guardar la ultima posición de la Lectra
// No modifica el libro

import { useRef, useState } from "react";

export const BookReader = () => {
  const currentPageRef = useRef<number>(1);
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    currentPageRef.current += 1;
    console.log(`Avanzaste a la página ${currentPageRef.current}`);
  };

  const previousPage = () => {
    if (currentPageRef.current === 1) {
      console.log(
        `No se puede retroceder a la página porque ya te encuentras en ${currentPageRef.current}`,
      );
      return;
    }

    currentPageRef.current -= 1;
    console.log(`Retrocediste a la página ${currentPageRef.current}`);
  };

  const goToPage = (page: number) => {
    if (page < 1) {
      console.log(`No se puede saltar a un valor negativo`);
    }

    currentPageRef.current = page;
    setCurrentPage(page);
    console.log(`Saltaste a la pagina ${currentPageRef.current}`);
  };

  return (
    <div>
      <h2>Lectra de libro</h2> <p>Página acutal: {currentPageRef.current}</p>
      <p>Página acutal [STATE]: {currentPage}</p>
      <button onClick={previousPage}>Página Anterior</button>
      <button onClick={nextPage}>Página Siguiente</button>
      <button
        onClick={() => {
          goToPage(10);
        }}
      >
        Ir a la pagina 10
      </button>
    </div>
  );
};

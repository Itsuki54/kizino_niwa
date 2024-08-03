import Image from "next/image";

export function Dashboard() {
  return (
    <div>
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="bg-white text-black shadow w-full p-2 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center">
              <h2 className="font-bold text-xl">Nombre de la Aplicación</h2>
            </div>
            <div className="md:hidden flex items-center">
              <button id="menuBtn">
                <i className="fas fa-bars text-gray-500 text-lg"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-wrap">
          <div
            className="p-2 bg-white w-full md:w-60 flex flex-col md:flex"
            id="sideNav"
          >
            <nav>
              <a
                className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
                href="#"
              >
                <i className="fas fa-home mr-2"></i>Inicio
              </a>
              <a
                className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
                href="#"
              >
                <i className="fas fa-file-alt mr-2"></i>Autorizaciones
              </a>
              <a
                className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
                href="#"
              >
                <i className="fas fa-users mr-2"></i>Usuarios
              </a>
              <a
                className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
                href="#"
              >
                <i className="fas fa-store mr-2"></i>Comercios
              </a>
              <a
                className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
                href="#"
              >
                <i className="fas fa-exchange-alt mr-2"></i>Transacciones
              </a>
            </nav>
          </div>
          <div className="flex-1 p-4 w-full md:w-1/2">
            <div className="relative max-w-md w-full">
              <div className="absolute top-1 left-2 inline-flex items-center p-2">
                <i className="fas fa-search text-gray-400"></i>
              </div>
              <input
                className="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline"
                type="search"
                placeholder="Buscar..."
              />
            </div>

            <div className="mt-8 bg-white p-4 shadow rounded-lg">
              <h2 className="text-gray-500 text-lg font-semibold pb-4">
                Autorizaciones Pendientes
              </h2>
              <div className="my-1"></div>
              <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
              <table className="w-full table-auto text-sm">
                <thead>
                  <tr className="text-sm leading-normal">
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                      Foto
                    </th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                      Nombre
                    </th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                      Rol
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-2 px-4 border-b border-grey-light"></td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      Juan Pérez
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      Comercio
                    </td>
                  </tr>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-2 px-4 border-b border-grey-light"></td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      María Gómez
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      Usuario
                    </td>
                  </tr>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-2 px-4 border-b border-grey-light"></td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      Carlos López
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      Usuario
                    </td>
                  </tr>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-2 px-4 border-b border-grey-light"></td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      Laura Torres
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      Comercio
                    </td>
                  </tr>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-2 px-4 border-b border-grey-light"></td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      Ana Ramírez
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      Usuario
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-right mt-4">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                Ver más
              </button>
            </div>
          </div>

          <div className="mt-8 bg-white p-4 shadow rounded-lg">
            <div className="bg-white p-4 rounded-md mt-4">
              <h2 className="text-gray-500 text-lg font-semibold pb-4">
                Transacciones
              </h2>
              <div className="my-1"></div>
              <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
              <table className="w-full table-auto text-sm">
                <thead>
                  <tr className="text-sm leading-normal">
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                      Nombre
                    </th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                      Fecha
                    </th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-right">
                      Monto
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-2 px-4 border-b border-grey-light">
                      Carlos Sánchez
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      27/07/2023
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light text-right">
                      $1500
                    </td>
                  </tr>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-2 px-4 border-b border-grey-light">
                      Pedro Hernández
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      02/08/2023
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light text-right">
                      $1950
                    </td>
                  </tr>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-2 px-4 border-b border-grey-light">
                      Sara Ramírez
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      03/08/2023
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light text-right">
                      $1850
                    </td>
                  </tr>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-2 px-4 border-b border-grey-light">
                      Daniel Torres
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      04/08/2023
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light text-right">
                      $2300
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

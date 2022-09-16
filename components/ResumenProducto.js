import Image from "next/image";
import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

const ResumenProductos = ({ producto }) => {

  const {handleEditarCantidades, handleEliminarProducto} = useQuiosco()

  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center">
      <div className="md:w-1/6">
        <Image
          width={300}
          height={400}
          alt={`Imagen producto ${producto.nombre}`}
          src={`/assets/img/${producto.imagen}.jpg`}
        />
      </div>

      <div className="md:w-4/6">
        <p className="text-3xl font-bold">{producto.nombre}</p>
        <p className="text-xl font-bold mt-2">Cantidad: {producto.cantidad}</p>
        <p className="text-xl font-bold mt-2 text-amber-500">
          Precio: {formatearDinero(producto.precio)}
        </p>
        <p className="text-sm text-gray-700 mt-2">
          Subtotal: {formatearDinero(producto.precio * producto.cantidad)}
        </p>
      </div>

      <div>
        <button
          type="button"
          className="bg-sky-700 flex gap-1 px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full"
          onClick={() => handleEditarCantidades(producto.id)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          Editar
        </button>

        <button
          type="button"
          className="bg-red-700 flex gap-1 px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full mt-2"
          onClick={() => handleEliminarProducto(producto.id)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
            />
          </svg>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ResumenProductos;

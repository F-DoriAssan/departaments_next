import { Alert } from 'flowbite-react';
import { headers } from 'next/headers';
import Link from 'next/link';
import { HiEye } from 'react-icons/hi';

export default async function NotFound() {
    const headersList = headers()
    const domain = headersList.get('host')
  return (
    <div>
    <Alert additionalContent={<ExampleAdditionalContent />} color="warning" withBorderAccent>
      <span>
        <span className="font-medium"><h2>Not Found
        Sin Servicio</h2></span> Change a few things up and try submitting again. 
      </span>
    </Alert> </div>)}
function ExampleAdditionalContent() {
  return (
    <>
     <div className="mb-4 mt-2 text-sm text-gray-700 dark:text-gray-800">
     Más información sobre esta alerta de información va aquí. Este texto de ejemplo se extenderá un poco más para que pueda ver cómo funciona el espaciado dentro de una alerta con este tipo de contenido. No se pudo encontrar el recurso solicitado <p>Could not find requested resource</p>
     More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
      </div>
      <div className="flex">
        <button
          type="button"
          className="mr-2 inline-flex items-center rounded-lg bg-gray-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-900"
        >
          <HiEye className="-ml-0.5 mr-2 h-4 w-4" />        <Link href="/">Intentar Nuevamente</Link> 
        </button>

        <button
          type="button"
          className="rounded-lg border border-gray-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-cyan-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:ring-gray-300 dark:border-gray-800 dark:text-gray-800 dark:hover:text-white"
        >
          Esperar
        </button>
      </div>
    </>
  );
}
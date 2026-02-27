
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4 text-red-500">404</h1>
      <h2 className="text-3xl font-semibold mb-8">Página No Encontrada</h2>
      <p className="text-xl text-gray-400 mb-12 text-center max-w-md">Lo sentimos, el recurso que buscas se ha movido, ha sido eliminado o nunca existió.</p>
      <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-lg text-xl transition-transform transform hover:scale-105">
        Volver al Inicio
      </Link>
    </main>
  )
}

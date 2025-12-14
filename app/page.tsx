export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Starter Kit
        </h1>
        <p className="text-gray-600 mb-8">
          Bereit fuer dein naechstes Projekt
        </p>
        <div className="space-y-2 text-sm text-gray-500">
          <p>1. Fuehre <code className="bg-gray-100 px-2 py-1 rounded">/setup</code> aus</p>
          <p>2. Dann <code className="bg-gray-100 px-2 py-1 rounded">/start</code> fuer dein erstes Feature</p>
        </div>
      </div>
    </main>
  )
}

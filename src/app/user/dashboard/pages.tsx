export default function UserDashboard() {
  return (
    <div className="p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Bienvenido a tu panel de usuario</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card: Mis Rifas */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Mis Rifas</h3>
          <p className="text-gray-600 mb-4">Rifas en las que participas</p>
          <div className="text-2xl font-bold text-blue-600">5</div>
        </div>
        
        {/* Card: Tickets Comprados */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Tickets Comprados</h3>
          <p className="text-gray-600 mb-4">Números adquiridos</p>
          <div className="text-2xl font-bold text-green-600">12</div>
        </div>
        
        {/* Card: Premios Ganados */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Premios Ganados</h3>
          <p className="text-gray-600 mb-4">Total de premios</p>
          <div className="text-2xl font-bold text-yellow-600">2</div>
        </div>
      </div>
      
      {/* Sección de Rifas Activas */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Rifas Activas</h2>
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="p-6">
            {/* Lista de rifas */}
            <div className="border-b py-4">
              <h4 className="font-semibold">Rifa del iPhone 15</h4>
              <p className="text-gray-600 text-sm">Finaliza: 15/01/2024</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
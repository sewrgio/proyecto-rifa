export default function AdminDashboard() {
  const stats = [
    { label: 'Rifas Activas', value: '8', color: 'bg-blue-500' },
    { label: 'Usuarios Participantes', value: '245', color: 'bg-green-500' },
    { label: 'Rifas Finalizadas', value: '12', color: 'bg-purple-500' },
    { label: 'Ingresos Totales', value: '$12,450', color: 'bg-yellow-500' },
  ]

  return (
    <div className="p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Panel de Administración</h1>
        <p className="text-gray-600">Gestiona todas las rifas y usuarios</p>
      </header>
      
      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mr-4`}>
                {/* Icono */}
              </div>
              <div>
                <p className="text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Acciones rápidas */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">Acciones Rápidas</h2>
          <div className="space-y-3">
            <button className="w-full text-left p-4 rounded-lg border hover:bg-gray-50">
              <span className="font-medium">➕ Crear Nueva Rifa</span>
            </button>
            <button className="w-full text-left p-4 rounded-lg border hover:bg-gray-50">
              <span className="font-medium">👥 Ver Usuarios</span>
            </button>
            <button className="w-full text-left p-4 rounded-lg border hover:bg-gray-50">
              <span className="font-medium">📊 Ver Reportes</span>
            </button>
          </div>
        </div>
        
        {/* Rifas recientes */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">Rifas Activas Recientes</h2>
          {/* Lista de rifas */}
        </div>
      </div>
    </div>
  )
}
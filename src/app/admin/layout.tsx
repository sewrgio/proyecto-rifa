export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Aquí iría la lógica de verificación de admin
  
  return (
    <div className="flex min-h-screen">
      {/* Sidebar Admin */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-xl font-bold mb-8">Admin Panel</h2>
        <nav className="space-y-2">
          <a href="/admin/dashboard" className="block py-2 px-4 rounded hover:bg-gray-800">Dashboard</a>
          <a href="/admin/rifas" className="block py-2 px-4 rounded hover:bg-gray-800">Rifas</a>
          <a href="/admin/usuarios" className="block py-2 px-4 rounded hover:bg-gray-800">Usuarios</a>
          <a href="/admin/reportes" className="block py-2 px-4 rounded hover:bg-gray-800">Reportes</a>
        </nav>
      </aside>
      
      {/* Contenido principal */}
      <div className="flex-1 bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 border-b">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Admin</h1>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg">
              Cerrar Sesión
            </button>
          </div>
        </header>
        
        {/* Contenido */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  )
}
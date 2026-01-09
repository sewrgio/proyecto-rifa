export default function HomePage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🎉 Sistema de Rifas 🎉</h1>
      <p>Bienvenido al sistema de gestión de rifas</p>
      <div style={{ marginTop: '2rem' }}>
        <a href="/auth/login" style={{ marginRight: '1rem', padding: '0.5rem 1rem', background: '#0070f3', color: 'white', borderRadius: '4px', textDecoration: 'none' }}>
          Iniciar Sesión
        </a>
        <a href="/auth/register" style={{ padding: '0.5rem 1rem', background: '#333', color: 'white', borderRadius: '4px', textDecoration: 'none' }}>
          Registrarse
        </a>
      </div>
    </div>
  )
}

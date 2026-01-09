import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Autenticación - Sistema de Rifas',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: '2rem',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ margin: 0, color: '#333' }}>🎯 Sistema de Rifas</h1>
          <p style={{ color: '#666', marginTop: '0.5rem' }}>
            Sistema de gestión de rifas online
          </p>
        </div>
        {children}
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a href="/" style={{ color: '#667eea', fontSize: '0.9rem' }}>
            ← Volver al inicio
          </a>
        </div>
      </div>
    </div>
  )
}
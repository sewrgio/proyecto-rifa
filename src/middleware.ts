import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rutas que requieren autenticación
const protectedRoutes = [
  '/admin',
  '/super-admin',
  '/user/dashboard',
  '/user/compra',
]

// Rutas públicas
const publicRoutes = [
  '/auth/login',
  '/auth/register',
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Crear respuesta base
  const response = NextResponse.next()
  
  // 1. Headers de seguridad
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  
  // 2. Control de caché según tipo de ruta
  if (pathname.startsWith('/_next/') || pathname.match(/\.(js|css|png|jpg|jpeg|gif|ico)$/)) {
    // Archivos estáticos - cache largo
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  } else if (pathname.startsWith('/api/')) {
    // API routes - no cache
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
  } else {
    // Páginas dinámicas - cache corto
    response.headers.set('Cache-Control', 'public, max-age=60, stale-while-revalidate=30')
  }
  
  // 3. Verificar si es una ruta protegida (ejemplo básico)
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  )
  
  // 4. Obtener token de autenticación (ejemplo con cookies)
  const authToken = request.cookies.get('auth-token')?.value
  const userRole = request.cookies.get('user-role')?.value
  
  // 5. Lógica de protección de rutas
  if (isProtectedRoute) {
    // Si no hay token, redirigir al login
    if (!authToken) {
      const loginUrl = new URL('/auth/login', request.url)
      loginUrl.searchParams.set('redirect', pathname)
      return NextResponse.redirect(loginUrl)
    }
    
    // Verificar permisos según rol
    if (pathname.startsWith('/super-admin') && userRole !== 'super-admin') {
      return NextResponse.redirect(new URL('/user/dashboard', request.url))
    }
    
    if (pathname.startsWith('/admin') && !['admin', 'super-admin'].includes(userRole || '')) {
      return NextResponse.redirect(new URL('/user/dashboard', request.url))
    }
  }
  
  // 6. Si ya está autenticado y trata de acceder a login/register
  const isPublicRoute = publicRoutes.some(route => 
    pathname.startsWith(route)
  )
  
  if (isPublicRoute && authToken) {
    // Redirigir al dashboard según rol
    const dashboardUrl = userRole === 'super-admin' 
      ? '/super-admin/dashboard'
      : userRole === 'admin'
      ? '/admin/dashboard'
      : '/user/dashboard'
    
    return NextResponse.redirect(new URL(dashboardUrl, request.url))
  }
  
  // 7. Logs para desarrollo (opcional)
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Middleware] ${request.method} ${pathname}`)
  }
  
  return response
}

export const config = {
  matcher: [
    // Aplica a todas las rutas excepto estáticas
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
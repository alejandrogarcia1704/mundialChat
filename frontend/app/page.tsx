import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-950 via-gray-900 to-black">

      {/* Hero Section - Layout tipo dashboard moderno */}
      <div className="relative overflow-hidden">
        
        {/* Efecto de glow decorativo */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        
        {/* Contenido principal con grid asimétrica */}
        <div className="relative max-w-7xl mx-auto px-4 py-12 min-h-screen flex items-center">
          
          {/* Grid de 2 columnas: izquierda información, derecha acciones */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Columna izquierda - Información principal */}
            <div className="space-y-8">
              {/* Badge futurista */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="text-purple-300 text-sm font-mono">SISTEMA EN VIVO</span>
              </div>

              {/* Título principal con efecto neón */}
              <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-purple-200 to-white bg-clip-text text-transparent">
                  Mensajeria
                </span>
                <br />
                <span className="text-white">TH Cloud</span>
              </h1>

              {/* Descripción con diseño mejorado */}
              <div className="space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Aplicación de mensajería en tiempo real construida con 
                  <span className="text-purple-400 font-semibold"> arquitectura moderna</span> y 
                  <span className="text-purple-400 font-semibold"> microservicios</span> en la nube.
                </p>
                
                {/* Features en grid */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: "⚡", text: "Tiempo Real" },
                    { icon: "🔒", text: "Encriptado" },
                    { icon: "☁️", text: "Cloud Native" },
                    { icon: "📱", text: "Multiplataforma" }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-300">
                      <span className="text-purple-400 text-xl">{feature.icon}</span>
                      <span className="text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Columna derecha - Tarjeta de acciones */}
            <div className="relative">
              {/* Efecto de brillo detrás de la tarjeta */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl blur-2xl opacity-30"></div>
              
              {/* Tarjeta principal */}
              <div className="relative bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-white">Comienza ahora</h3>
                    <p className="text-purple-300 text-sm">Únete a la revolución de mensajería cloud</p>
                  </div>

                  <div className="space-y-3">
                    {/* Botón principal - Registro */}
                    <Link href="/register" className="block">
                      <Button size="lg" className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white shadow-lg shadow-purple-500/30 transition-all duration-300 h-12 text-base font-semibold">
                        ✨ Crear cuenta nueva
                      </Button>
                    </Link>

                    {/* Botón secundario - Login */}
                    <Link href="/login" className="block">
                      <Button size="lg" variant="outline" className="w-full border-purple-500/50 text-purple-300 hover:bg-purple-500/20 hover:text-white transition-all duration-300 h-12">
                        🔐 Iniciar sesión
                      </Button>
                    </Link>

                    {/* Separador */}
                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-purple-500/30"></div>
                      </div>
                      <div className="relative flex justify-center text-xs">
                        <span className="px-2 bg-black/40 text-purple-300">O descarga la app</span>
                      </div>
                    </div>

                    {/* Botón APK con diseño especial */}
                    <a href="/downloads/ChatApp.apk" download className="block">
                      <Button size="lg" variant="secondary" className="w-full bg-white/5 border border-purple-400/30 text-purple-300 hover:bg-purple-600/30 hover:text-white backdrop-blur-sm transition-all duration-300 h-12">
                        📱 Descargar APK
                      </Button>
                    </a>
                  </div>

                  {/* Información adicional */}
                  <div className="text-center text-xs text-purple-400/60 pt-4">
                    <p>Proyecto académico · Computación en la Nube</p>
                  </div>
                </div>
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-500 rounded-full filter blur-2xl opacity-20"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-purple-600 rounded-full filter blur-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer flotante minimalista */}
      <footer className="fixed bottom-0 left-0 right-0 bg-black/30 backdrop-blur-md border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center text-xs text-purple-300/50">
            <span>Mensajeria TH</span>
            <span>v1.0 · Cloud Native</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
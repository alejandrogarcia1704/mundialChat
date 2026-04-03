import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-950 via-gray-900 to-black flex flex-col">

      {/* Header */}
      <header className="border-b border-purple-500/30 bg-black/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <h1 className="font-bold text-xl bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            Mensajeria TH
          </h1>
          <div className="flex gap-2">
            <Link href="/login">
              <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/20 hover:text-white transition-all duration-300">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white shadow-lg shadow-purple-500/30 transition-all duration-300">
                Registro
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl text-center space-y-6 backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-purple-500/20 shadow-2xl">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-purple-200 to-white bg-clip-text text-transparent">
            Aplicación de Mensajería en Tiempo Real
          </h2>
          <p className="text-purple-200/80 text-lg">
            Esta aplicación forma parte de una práctica de la materia
            <strong className="text-purple-300"> Computación en la Nube</strong>.
            Permite a los usuarios comunicarse en tiempo real utilizando
            WebSockets, almacenamiento en la nube y una arquitectura moderna
            basada en microservicios.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/downloads/ChatApp.apk" download>
              <Button size="lg" variant="secondary" className="bg-white/10 border-purple-400 text-purple-300 hover:bg-purple-600/50 hover:text-white backdrop-blur-sm transition-all duration-300">
                Descargar APK
              </Button>
            </a>
            <Link href="/register">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white shadow-lg shadow-purple-500/40 transition-all duration-300">
                Crear cuenta
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/20 hover:text-white transition-all duration-300">
                Iniciar sesión
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/30 bg-black/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto p-4 text-center text-sm text-purple-300/60">
          Proyecto académico · Computación en la Nube
        </div>
      </footer>
    </main>
  );
}
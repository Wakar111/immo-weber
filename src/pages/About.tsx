import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Code, Zap, Package } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">MyApp</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">About This Application</h1>

        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            This is a simple frontend application showcasing modern web development practices and technologies.
            It demonstrates how to build a clean, responsive, and user-friendly interface using industry-standard tools.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The application features a multi-page layout with smooth navigation, beautiful design elements,
            and a focus on user experience.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Technology Stack</h2>

        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <Code className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">React with TypeScript</h3>
              <p className="text-gray-600">
                A powerful combination for building type-safe, component-based user interfaces with excellent tooling support.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <Zap className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Vite</h3>
              <p className="text-gray-600">
                Lightning-fast build tool that provides instant hot module replacement and optimized production builds.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
            <div className="bg-cyan-100 w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <Package className="h-5 w-5 text-cyan-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tailwind CSS</h3>
              <p className="text-gray-600">
                Utility-first CSS framework that enables rapid UI development with a consistent design system.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

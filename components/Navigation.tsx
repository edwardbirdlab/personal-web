import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold hover:text-gray-300 transition-colors">
            Edward Bird, PhD
          </Link>
          <div className="flex space-x-8">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/publications" className="hover:text-gray-300 transition-colors">
              Publications
            </Link>
            <Link href="/skills" className="hover:text-gray-300 transition-colors">
              Skills
            </Link>
            <Link href="/cv" className="hover:text-gray-300 transition-colors">
              CV
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

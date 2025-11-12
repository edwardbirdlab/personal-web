import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-lg border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Edward Bird, PhD
          </Link>
          <div className="flex space-x-8">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/publications" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Publications
            </Link>
            <Link href="/skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Skills
            </Link>
            <Link href="/cv" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              CV
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

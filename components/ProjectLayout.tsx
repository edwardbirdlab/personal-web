import Link from 'next/link';

interface ProjectLayoutProps {
  title: string;
  papers?: Array<{ title: string; url: string; journal?: string }>;
  repositories?: Array<{ name: string; url: string }>;
  children: React.ReactNode;
}

export default function ProjectLayout({
  title,
  papers = [],
  repositories = [],
  children,
}: ProjectLayoutProps) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Link href="/" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-8">{title}</h1>

      {/* Associated Papers */}
      {papers.length > 0 && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Associated Publications</h2>
          <ul className="space-y-3">
            {papers.map((paper, index) => (
              <li key={index}>
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 font-medium"
                >
                  {paper.title}
                </a>
                {paper.journal && (
                  <span className="text-gray-600 text-sm ml-2">— {paper.journal}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Associated Repositories */}
      {repositories.length > 0 && (
        <div className="bg-gray-50 border-l-4 border-gray-500 p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Code Repositories</h2>
          <ul className="space-y-2">
            {repositories.map((repo, index) => (
              <li key={index}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-mono"
                >
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Project Content */}
      <article className="prose prose-lg max-w-none">
        {children}
      </article>
    </div>
  );
}

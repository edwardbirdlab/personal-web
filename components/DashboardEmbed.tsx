'use client';

import React from 'react';

interface DashboardEmbedProps {
  src: string;
  title?: string;
  height?: string;
}

export default function DashboardEmbed({
  src,
  title = "Interactive Dashboard",
  height = "600px"
}: DashboardEmbedProps) {
  const handleFullscreen = () => {
    window.open(src, '_blank');
  };

  return (
    <div className="dashboard-embed-container my-8">
      <div className="relative w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={src}
          title={title}
          className="w-full"
          style={{ height }}
          frameBorder="0"
          allowFullScreen
        />
        <button
          onClick={handleFullscreen}
          className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition-colors duration-200 flex items-center gap-2 text-sm font-medium z-10"
          aria-label="Open dashboard in fullscreen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
          View Fullscreen
        </button>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
        Click on map markers to explore site-specific data. Use the fullscreen button for detailed analysis.
      </p>
    </div>
  );
}

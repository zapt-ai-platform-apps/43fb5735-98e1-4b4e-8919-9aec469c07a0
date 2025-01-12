import React from 'react';
import '../styles/globals.css';
import * as Sentry from '@sentry/browser';

if (typeof window !== 'undefined') {
  Sentry.init({
    dsn: process.env.VITE_PUBLIC_SENTRY_DSN,
    environment: process.env.VITE_PUBLIC_APP_ENV,
    integrations: [Sentry.browserTracingIntegration()],
    initialScope: {
      tags: {
        type: 'frontend',
        projectId: process.env.VITE_PUBLIC_APP_ID
      }
    }
  });

  // Umami Analytics
  if (process.env.VITE_PUBLIC_APP_ENV !== 'development') {
    const script = document.createElement('script');
    script.defer = true;
    script.src = 'https://cloud.umami.is/script.js';
    script.setAttribute('data-website-id', process.env.VITE_PUBLIC_UMAMI_WEBSITE_ID);
    document.head.appendChild(script);
  }

  // Add PWA support
  window.progressierAppRuntimeSettings = {
    uid: process.env.VITE_PUBLIC_APP_ID,
    icon512: "https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=512&height=512",
    name: "New App",
    shortName: "New App"
  };
  const progressierScript = document.createElement('script');
  progressierScript.setAttribute('src', 'https://progressier.app/z8yY3IKmfpDIw3mSncPh/script.js');
  progressierScript.setAttribute('defer', 'true');
  document.querySelector('head').appendChild(progressierScript);
}

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen text-body">
      <Component {...pageProps} />
      <footer className="p-4 text-center">
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}
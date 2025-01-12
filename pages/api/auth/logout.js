import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.VITE_PUBLIC_SENTRY_DSN,
  environment: process.env.VITE_PUBLIC_APP_ENV,
  initialScope: {
    tags: {
      type: "backend",
      projectId: process.env.VITE_PUBLIC_APP_ID
    }
  }
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Client can remove token from storage or server can manage a token blacklist.
    return res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    Sentry.captureException(error);
    console.error("Logout Error:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
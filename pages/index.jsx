import React from 'react';

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to EventEase</h1>
      <p className="mb-8 text-center">
        A real-time event management platform. Get started by registering or logging in!
      </p>
      <a
        href="/register"
        className="cursor-pointer px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors mb-2"
      >
        Register
      </a>
      <a
        href="/login"
        className="cursor-pointer px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
      >
        Login
      </a>
    </div>
  );
}
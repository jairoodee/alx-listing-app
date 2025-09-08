import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="ALX Listing Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Welcome to ALX Listing App
        </h1>
        <p className="mt-4 text-center text-gray-600">
          Your application is up and running!
        </p>
      </main>
    </div>
  );
}
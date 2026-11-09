"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="bam-page"><section className="bam-hero"><p>Something went wrong</p><h1>We could not load this journey page.</h1><button className="gold-button" onClick={reset}>Try again</button></section></main>;
}

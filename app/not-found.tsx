import Link from "next/link";

export default function NotFound() {
  return <main className="bam-page"><section className="bam-hero"><p>Page not found</p><h1>That journey page is not available.</h1><span>Please return home or explore BAM&apos;s private transport services.</span><Link className="gold-button" href="/">Return home</Link></section></main>;
}

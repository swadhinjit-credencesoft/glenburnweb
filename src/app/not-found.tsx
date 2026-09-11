import Link from "next/link";
import { SITE } from "@/data/site";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "80vh",
      padding: "40px 20px",
      textAlign: "center",
    }}>
      <h1 style={{ fontSize: 72, fontWeight: 800, color: "var(--deep)", marginBottom: 8 }}>
        404
      </h1>
      <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
        Page not found
      </h2>
      <p style={{ fontSize: 16, color: "var(--muted)", maxWidth: 420, marginBottom: 28 }}>
        Sorry, the page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/" className="btn btn-p">
          Back to home
        </Link>
        <Link href="/book" className="btn btn-o">
          Book a service
        </Link>
        <a href={SITE.phoneHref} className="btn btn-o">
          📞 Call {SITE.phone}
        </a>
      </div>
    </div>
  );
}

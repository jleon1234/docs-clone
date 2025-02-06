import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center " >
      Click <Link href="/documents/12345" >{" "} Here {" "}</Link> to go to document
    </div>
  );
}
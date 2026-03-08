import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-700">
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

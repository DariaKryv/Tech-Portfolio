import Link from "next/link";
import BlobBackground from "./components/BlobBackground";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div className="space-y-18">
      {/* HERO BANNER */}
      <section className="px-2 py-16 text-center">
        {/* <section
        className="relative rounded-2xl overflow-hidden"
        style={{ backgroundImage: "url('/is.jpg')" }}
      > */}
        <BlobBackground />
        <h1 className="text-5xl font-bold text-blue-100 py-16">
          Building Modern Dev Studio
        </h1>

        <p className="text-lg text-gray-200 mt-4 max-w-2xl mx-auto">
          Custom web apps, mobile apps, and scalable platformsdesigned for
          startups and enterprises
        </p>

        <div className="flex justify-center gap-4 mt-8 ">
          <Link
            href="/about"
            className="px-6 py-3 border border-green-500 text-green-400 rounded-lg hover:bg-green-500/50"
          >
            View Portfolio
          </Link>

          <Link
            href="/contact"
            className="px-6  py-3 bg-green-500/80 text-white rounded-lg shadow-md hover:bg-green-400"
          >
            Get in Contact
          </Link>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-300 mb-6">
          What We Build
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-400 rounded-xl  bg-black/20 shadow-sm">
            <h3 className="font-semibold text-green-700 text-xl">Websites</h3>
            <p className="text-gray-200 mt-2">
              Modern company websites and landing pages.
            </p>
          </div>

          <div className="p-6 border border-gray-400 rounded-xl bg-black/20 shadow-sm">
            <h3 className="font-semibold text-green-700 text-xl">Web Apps</h3>
            <p className="text-gray-200 mt-2">
              Dashboards, SaaS products and internal tools.
            </p>
          </div>

          <div className="p-6 border border-gray-400 rounded-xl  bg-black/20 shadow-sm">
            <h3 className="font-semibold text-green-700 text-xl">
              Mobile Apps
            </h3>
            <p className="text-gray-200 mt-2">
              Cross-platform apps connected to modern APIs.
            </p>
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section>
        <h3 className="text-3xl pt-20 font-semibold text-gray-300 mb-14 text-center border-b border-pink-900/10">
          Trusted by Clients
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center opacity-70">
          <a href="https://client1.com" target="_blank">
            <img
              src="/SopraSteria.png"
              alt="Sopra Steria"
              className="h-10 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition"
            />
          </a>

          <a href="https://client2.com" target="_blank">
            <img
              src="/ProRail.svg"
              alt="ProRail"
              className="h-10 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition"
            />
          </a>

          <a href="https://client3.com" target="_blank">
            <img
              src="/Ministerie-VWS-logo.png"
              alt="Corona"
              className="h-10 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition"
            />
          </a>

          <a href="https://client4.com" target="_blank">
            <img
              src="/asia_gaming.png.webp"
              alt="UMCG"
              className="h-10 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition"
            />
          </a>
        </div>
      </section>

      <section className="pt-0 m-0">
        <Contact />
      </section>
    </div>
  );
}

// shadow-[0_12px_8px_-4px_rgba(266,12,93,0.25)]

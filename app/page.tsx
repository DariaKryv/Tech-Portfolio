import Link from "next/link";
import BlobBackground from "./components/BlobBackground";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div className="space-y-18">
      {/* HERO BANNER */}
      <section className="p-22 text-center">
        {/* <section
        className="relative rounded-2xl overflow-hidden"
        style={{ backgroundImage: "url('/is.jpg')" }}
      > */}
        <BlobBackground />
        <h1 className="text-5xl font-bold text-blue-100">Modern Dev Studio</h1>

        <p className="text-lg text-blue-200 mt-4 max-w-2xl mx-auto">
          We build fast, scalable and beautifully designed digital products for
          businesses that want to grow online.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <Link
            href="/about"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
          >
            View Work
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-50"
          >
            Start a Project
          </Link>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section>
        <h3 className="text-3xl font-semibold text-gray-200 mb-10 text-center">
          Trusted by Clients
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-80  bg-gray-100/20">
          <a
            href="https://client1.com"
            target="_blank"
            className="p-2 hover:shadow-lg transition rounded-lg"
          >
            <img
              src="/SopraSteria.png"
              alt="Client 1"
              className="mx-auto h-12 object-contain grayscale hover:grayscale-0 transition"
            />
          </a>

          <a
            href="https://client1.com"
            target="_blank"
            className="p-2 hover:shadow-lg transition rounded-lg"
          >
            <img
              src="/ProRail.svg"
              alt="Client 2"
              className="mx-auto h-12 object-contain grayscale hover:grayscale-0 transition"
            />
          </a>

          <a
            href="https://client1.com"
            target="_blank"
            className="p-2 hover:shadow-lg transition rounded-lg"
          >
            <img
              src="/corona.png"
              alt="Client 3"
              className="mx-auto h-12 object-contain grayscale hover:grayscale-0 transition"
            />
          </a>

          <a
            href="https://client1.com"
            target="_blank"
            className="p-2 hover:shadow-lg transition rounded-lg"
          >
            <img
              src="/umcg.png"
              alt="Client 4"
              className="mx-auto h-12 object-contain grayscale hover:grayscale-0 transition"
            />
          </a>
        </div>
      </section>

      {/* SERVICES SECTION */}
      {/* <section>
        <h2 className="text-3xl font-semibold text-gray-300 mb-6">
          What We Build
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-300 rounded-xl bg-white shadow-sm">
            <h3 className="font-semibold text-blue-800 text-xl">Websites</h3>
            <p className="text-gray-700 mt-2">
              Modern company websites and landing pages.
            </p>
          </div>

          <div className="p-6 border border-gray-300 rounded-xl bg-white shadow-sm">
            <h3 className="font-semibold text-blue-800 text-xl">Web Apps</h3>
            <p className="text-gray-700 mt-2">
              Dashboards, SaaS products and internal tools.
            </p>
          </div>

          <div className="p-6 border border-gray-300 rounded-xl bg-white shadow-sm">
            <h3 className="font-semibold text-blue-800 text-xl">Mobile Apps</h3>
            <p className="text-gray-700 mt-2">
              Cross-platform apps connected to modern APIs.
            </p>
          </div>
        </div>
      </section> */}

      <section>
        <Contact />
      </section>
    </div>
  );
}

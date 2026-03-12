export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-28 text-gray-200">
      {/* About the Studio */}
      <section className="mb-20 text-center">
        <h1 className="text-4xl font-bold mb-6">About the Studio</h1>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Megokruto is an independent software development studio focused on
          building scalable digital products for startups and enterprises. We
          specialize in modern web platforms, system architecture, and
          high-performance applications.
        </p>
      </section>

      {/* Founder */}
      <section className="mb-20 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/team.jpeg"
          alt="Team"
          className="rounded-xl shadow-lg w-full object-cover"
        />

        <div>
          <h2 className="text-3xl font-semibold mb-4">Founder</h2>

          <p className="text-gray-300 mb-4">
            A software engineer specializing in full-stack development, cloud
            architecture, and scalable systems. Over the years have worked with
            organizations across multiple industries delivering modern digital
            platforms and enterprise applications.
          </p>

          <p className="text-gray-300">
            The focus is on building reliable systems, intuitive interfaces, and
            high-performance software that supports real business needs.
          </p>
        </div>
      </section>

      {/* Professional Background */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-6">Professional Background</h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          View full professional experience, technical background and
          development history.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          {/* View Resume */}
          <a
            href="/cv"
            className="px-6 py-3 rounded-lg bg-pink-600 hover:bg-pink-500 transition text-white font-medium"
          >
            View Resume
          </a>

          {/* Download CV */}
          <a
            href="/CV Daria Kryvosheieva.pdf"
            download
            className="px-6 py-3 rounded-lg border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white transition font-medium"
          >
            Download CV
          </a>
        </div>
      </section>
    </main>
  );
}

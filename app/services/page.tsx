export default function Services() {
  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-bold"></h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="border p-6 rounded-xl">
          <h2 className="text-2xl font-semibold">Website Development</h2>
          <p>
            Modern responsive websites for businesses, startups and personal
            brands.
          </p>
        </div>

        <div className="border p-6 rounded-xl">
          <h2 className="text-2xl font-semibold">Web Applications</h2>
          <p>Custom platforms, dashboards and SaaS products.</p>
        </div>

        <div className="border p-6 rounded-xl">
          <h2 className="text-2xl font-semibold">Mobile Apps</h2>
          <p>Cross-platform applications connected to APIs.</p>
        </div>

        <div className="border p-6 rounded-xl">
          <h2 className="text-2xl font-semibold">Maintenance</h2>
          <p>Updates, improvements and scaling for your product.</p>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

const projects = [
  {
    id: "project1",
    slug: "corona-dashboard",
    name: "Corona Dashboard",
    description: "Ministery van Volksgezondheid Welzijn en Sport",
    image: "corona1.png",
  },
  {
    id: "project2",
    name: "Monitoring App Dashboard",
    description: "ProRail",
    image: "/prorail-1.png",
  },
  {
    id: "project3",
    name: "Code & Comedy",
    description: "SopraSteria",
    image: "/Codecomedy.png",
  },
  {
    id: "project4",
    name: "Riminder App",
    description: "SopraSteria",
    image: "/reminderApp.png",
  },
  {
    id: "project5",
    name: "Nierkeuze.nl",
    description: "UMCG",
    image: "/UMCGN.png",
  },
  {
    id: "project6",
    name: "Casino Gaming platform",
    description: "Asia Gaming",
    image: "/AG.jpg",
  },
  {
    id: "project7",
    name: "Casino Gaming platform",
    description: "Asia Gaming",
    image: "/AGaming.png",
  },
];

export default function Portfolio() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 text-gray-300">
      <h1 className="text-4xl font-bold mb-12 text-center">Projects</h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/pages/${project.id}`}
            className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur  p-4 transition-all duration-300 group-hover:bg-opacity-70">
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <p className="text-gray-300 text-sm mt-1">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

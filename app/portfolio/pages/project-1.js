import { useRouter } from "next/router";
import Link from "next/link";

const projectDetails = {
  project1: {
    name: "Megokruto Dashboard",
    description:
      "This dashboard allows startups to monitor KPIs, manage users, and scale their operations efficiently. Built with React, Next.js, and Tailwind CSS.",
    image: "/pages/corona1.png",
  },
  project2: {
    name: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory tracking, payment integration, and admin analytics. Built with Next.js and Node.js.",
    image: "/projects/ecommerce.jpg",
  },
  project3: {
    name: "Chat App",
    description:
      "Realtime chat application with emoji reactions, notifications, and secure messaging. Built using WebSockets and React.",
    image: "/projects/chatapp.jpg",
  },
};

export default function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;

  const project = projectDetails[id];

  if (!project)
    return (
      <p className="text-center mt-24 text-gray-400">Project not found.</p>
    );

  return (
    <main className="max-w-4xl mx-auto px-6 py-24 text-gray-300">
      <Link
        href="/portfolio"
        className="text-pink-500 hover:underline mb-8 inline-block"
      >
        ← Back to Portfolio
      </Link>

      <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
      <img
        src={project.image}
        alt={project.name}
        className="w-full rounded-xl shadow-lg mb-6 object-cover"
      />
      <p className="text-gray-400 text-lg">{project.description}</p>
    </main>
  );
}

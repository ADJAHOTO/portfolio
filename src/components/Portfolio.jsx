import { motion } from "framer-motion";

const projects = [
  {
    title: "Gestion de Reservations de Ticket de voyage",
    description:
      "Application Mobile en Flutter fluide et interactif concu pour repondre aux bésoins de réservations de tickets de voyage.",
    technologies: ["Flutter", "Firebase"],
    image: "/images/creativis.png",
    link: "https://creativis.example.com",
  },
  {
    title: "Application Web de gestion des taches",
    description:
      "Un site web dédié pour la gestion des taches utilisateurs.",
    technologies: ["MYSQL", "laravel", "Bootstrap"],
    image: "/image/projets/gestion_taches.png",
    link: "https://otakuunited.example.com",
  },
  {
    title: "Koordina",
    description:
      "Application web de gestion de tâches : ajoutez des tâches, marquez-les comme terminées et gérez les suppressions.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    image: "/images/koordina.png",
    link: "https://koordina.example.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-[#0b0f19] text-white py-20 px-8">
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-10 mt-11">
        Réalisations
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            id="portfolio"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#111827] p-5 rounded-lg shadow-lg hover:shadow-orange-500 transition-shadow hover:scale-105 transition-transform"
          >
            <img
              src={project.image}
              alt={`Image du projet ${project.title}`}
              loading="lazy"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>

            <p className="text-orange-400 font-semibold mt-3">
              🔧 Technologies utilisées :
            </p>
            <p className="text-xs md:text-sm text-gray-400">
              {project.technologies.join(", ")}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-red-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-600 transition"
            >
              Visiter le projet
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

import { ExternalLink,Github} from 'lucide-react';

import BlinkChat from '../images/BlinkChat.png';
import emp from '../images/emp.png';
import weather from '../images/weather.png';


const projects = [
  {
    title: 'BlinkChat',
    description: 'Full Stack Chat Application wherein users can communicate with each other in real time.',
    image: BlinkChat,
    technologies: ['MERN', 'JWT', 'Tailwind', 'Socket.io', 'Zustand'],
    github: 'https://github.com/LuckySilver0021/BlinkChat',
    live: 'https://blinkchat-lpiq.onrender.com',
  },
  {
    title: 'Employee Management System',
    description: 'A collaborative Employee Management System where admin can assign tasks to its employees and employees can mark it as completed, failed or aborted.',
    image: emp,
    technologies: ['React', 'Typescript', 'Tailwind CSS'],
    github: 'https://github.com/LuckySilver0021/emp-mgmt-sys',
    live: 'https://emp-mgmt-sys.netlify.app',
  },
  {
    title: 'Weather App',
    description: 'A robust real-time weather app with interactive forecast.',
    image: weather,
    technologies: ['React', 'OpenWeather API', 'Tailwind'],
    github: 'https://github.com/LuckySilver0021/weather-app',
    live: 'https://weatherapp0025.netlify.app/',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, image, technologies, github, live }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 hover:opacity-100 flex items-center justify-center space-x-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
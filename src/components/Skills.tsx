import { Code2, Database, Layout, Server } from 'lucide-react';

const skills = {
  frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  backend: ['Node', 'Express','Bun','Postman'],
  database: ['MongoDB', 'MySQL', 'PostgreSQL',],
  design: ['Figma', 'UI/UX', 'Responsive Design'],
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCategory
            title="Frontend"
            skills={skills.frontend}
            icon={<Layout className="w-6 h-6" />}
          />
          <SkillCategory
            title="Backend"
            skills={skills.backend}
            icon={<Server className="w-6 h-6" />}
          />
          <SkillCategory
            title="Database"
            skills={skills.database}
            icon={<Database className="w-6 h-6" />}
          />
          <SkillCategory
            title="Design"
            skills={skills.design}
            icon={<Code2 className="w-6 h-6" />}
          />
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, skills, icon }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center space-x-3 mb-4">
        <div className="text-blue-400">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-300">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
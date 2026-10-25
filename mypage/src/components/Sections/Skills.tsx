'use client';

import { motion } from 'framer-motion';
import { 
  Code2, Database, Server 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    { title: 'Software & Web', icon: Code2, skills: ['Python, Java, C & C++', 'JavaScript & TypeScript', 'Django, React & Angular', 'PHP, Bootstrap & Tailwind CSS'] },
    { title: 'Data & Geospatial', icon: Database, skills: ['Power BI & STATA', 'ArcGIS & QGIS', 'MySQL & PostgreSQL', 'Machine learning & CNNs'] },
    { title: 'Networks & Systems', icon: Server, skills: ['TCP/IP & switching', 'Network troubleshooting & NOC', 'Linux, Git & Docker', 'Authentication & access control'] },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container-responsive section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary-900">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 card-hover border border-gray-100"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-50 rounded-xl mr-4">
                  <category.icon className="h-6 w-6 text-primary-700" />
                </div>
                <h3 className="text-xl font-bold text-primary-900">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-start gap-3 border-b border-gray-100 pb-4 last:border-0"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-700"/><span className="font-medium text-gray-700">{skill}</span></div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-primary-900">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Python', 'TypeScript', 'React', 'Django',
              'PHP', 'MATLAB', 'PostgreSQL', 'Power BI',
              'Docker', 'QGIS', 'Git', 'Linux'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <span className="font-medium text-primary-800">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
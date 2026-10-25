'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, Map, Zap, Utensils } from 'lucide-react';

const Projects = () => {
  const projects = [
    { title: 'Credit-Based Electricity Access System', description: 'Contributed to software components for a smart energy platform designed to support credit-based electricity access. Developed with a multidisciplinary team at Soroti University.', tags: ['Smart energy', 'Software development', 'Team project'], icon: Zap, color: 'bg-blue-100 text-blue-800' },
    { title: 'Sickle Cell Detection AI Model', description: 'An academic machine-learning project using convolutional neural networks to investigate sickle cell detection.', tags: ['Machine learning', 'CNNs', 'Academic research'], icon: Cpu, color: 'bg-purple-100 text-purple-800' },
    { title: 'Land Suitability Analysis', description: 'Collaborated on a GIS solution assessing oil palm and cassava suitability in Anambra State, Nigeria. Automated geospatial workflows with Python and developed the project website.', tags: ['ArcGIS / QGIS', 'Python', 'HTML / CSS / JavaScript'], icon: Map, color: 'bg-green-100 text-green-800' },
    { title: 'Food Ordering Website', description: 'Developed a web-based food ordering system, combining a browser interface with PHP and database technologies.', tags: ['HTML', 'CSS', 'PHP', 'Databases'], icon: Utensils, color: 'bg-blue-100 text-blue-800' },
    { title: 'Hotel Management System', description: 'Built a C application to manage hotel-related operations and apply structured programming concepts.', tags: ['C', 'Application development'], icon: Code2, color: 'bg-purple-100 text-purple-800' },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container-responsive section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary-900">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Selected work in software development, energy access, machine learning and geospatial analysis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group card-hover bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${project.color}`}>
                    <project.icon size={24} />
                  </div>

                </div>

                {/* Project Content */}
                <h3 className="text-xl font-bold mb-2 text-primary-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-50 text-primary-800 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Indicator */}
              <div className="h-1 w-0 bg-primary-700 transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-primary">
            Discuss a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
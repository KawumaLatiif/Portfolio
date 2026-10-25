'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    { type: 'work', title: 'Support Engineer — Network Operations Centre', company: 'Soliton Telmec', period: 'December 2025 – Present', location: 'Uganda', description: 'Diagnose network incidents, support CSquared, ZTE and NITA infrastructure, and track escalation and resolution across enterprise telecommunications networks.' },
    { type: 'work', title: 'Software Engineer — Electricity Sharing Project', company: 'Soroti University', period: 'November 2025 – July 2026', location: 'Uganda', description: 'Contributed to a credit-based electricity access system and collaborated with technical teams on scalable, user-centred software components.' },
    { type: 'work', title: 'Research Assistant — African BlendED', company: 'ABC BlendEd Course, second edition', period: 'May – July 2025', location: 'Uganda / Nigeria / Mozambique', description: 'Worked with a multinational team on agricultural land suitability for Chelsea Agric. Automated geospatial analysis with Python and built the project website.' },
    { type: 'work', title: 'IT Intern — Commercial Department', company: 'National Social Security Fund (NSSF)', period: 'June – August 2024', location: 'Uganda', description: 'Supported daily IT operations, data management, dataset preparation and analysis, working across departments to improve internal workflows.' },
    { type: 'work', title: 'General Manager (Seasonal)', company: 'Bulo Coffee Factory', period: 'May 2021 – August 2024', location: 'Uganda', description: 'Managed coffee milling operations during school and university breaks, supervised production and coordinated day-to-day workflows.' },
    { type: 'education', title: 'BEng, Electronics and Computer Engineering', company: 'Soroti University', period: '2022 – 2025', location: 'Uganda', description: 'First Class Honors.' },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container-responsive section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary-900">Experience & Education</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200 hidden lg:block" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative lg:w-1/2 ${
                  index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:ml-auto'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`hidden lg:block absolute top-6 w-4 h-4 bg-primary-700 rounded-full border-4 border-white shadow-lg ${index % 2 === 0 ? "-right-2" : "-left-2"}`} />

                {/* Content Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 card-hover border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className={`p-3 rounded-xl mr-4 ${
                      exp.type === 'work' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {exp.type === 'work' ? (
                        <Briefcase size={24} />
                      ) : (
                        <GraduationCap size={24} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 text-primary-900">{exp.title}</h3>
                      <p className="text-primary-700 font-semibold mb-2">{exp.company}</p>
                      
                      {/* Details */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {exp.period}
                        </span>
                        <span className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </span>
                      </div>
                      
                      <p className="text-gray-600">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
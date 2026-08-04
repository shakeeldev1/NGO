import React from 'react';
import { motion } from 'framer-motion';

const RecentProjectsSection = () => {
  const projects = [
    {
      title: 'Free Heat Stroke & Medical Camp',
      category: 'Health Relief',
      date: 'June 2026',
      description:
        'Provided emergency hydration, medical checkups, and free medicines to over 300 vulnerable individuals during peak summer.',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Deeni Taleem & Primary Education Drive',
      category: 'Education',
      date: 'April 2026',
      description:
        'Enrolled new students and distributed essential learning kits and books to children in rural areas.',
      image:
        'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Clean Environment & Tree Plantation',
      category: 'Environment',
      date: 'February 2026',
      description:
        'Planted native saplings and hosted community awareness workshops on sustainable environmental practices.',
      image:
        'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 text-slate-800 overflow-hidden">
      {/* Expanded max-width and tighter horizontal padding */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-xs sm:text-sm font-semibold tracking-wider text-[#00BC7D] uppercase"
            >
              Impact in Action
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-1 sm:mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-slate-900"
            >
              Recent Projects & Activities
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-3 md:mt-0"
          >
            <a
              href="#all-projects"
              className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#00BC7D] hover:text-[#00a36c] transition-colors group"
            >
              View all initiatives
              <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 group flex flex-col"
            >
              
              {/* Image Banner */}
              <div className="relative h-48 overflow-hidden bg-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-slate-900/75 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-medium text-slate-400">
                    {project.date}
                  </span>
                  <h3 className="mt-2 text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#00BC7D] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href="#read-more"
                    className="text-xs font-semibold text-[#00BC7D] flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
                  >
                    Read full report <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RecentProjectsSection;
import React from 'react';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
    title: 'Luksuskeittiön remontti',
    location: 'Helsinki'
  },
  {
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea',
    title: 'Moderni kylpyhuoneremontti',
    location: 'Espoo'
  },
  {
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705',
    title: 'Kodin täysremontti',
    location: 'Tampere'
  }
];

export default function Portfolio() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Viimeisimmät projektimme</h2>
          <p className="text-lg text-gray-600">Muutamme kodit unelmien tiloiksi</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p>{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";

const serviceItems = [
  {
    src: "/assets/img/services/hardscape-1.jpg",
    alt: "Hardscape",
  },
  {
    src: "/assets/img/services/softscape-2.jpg",
    alt: "Softscape",
  },
  {
    src: "/assets/img/services/features-1.jpg",
    alt: "Features",
  },
];

const ProjectPage = () => {
  return (
    <main className="bg-white min-h-screen py-20 pt-[220px] md:pt-[250px] px-4 flex flex-col items-center">
      {/* Título */}
      <h1 className="text-3xl font-bold font-primary uppercase text-center mb-12">Projects</h1>

      {/* Texto introdutório com consistência */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-base text-justify leading-relaxed font-sans mb-16">
        <p>
          We offer various professionally crafted design packages that incorporate everything from the
          initial consultation and design to the planting, lighting and building of the garden.
        </p>
        <p>
          Please see our Instagram page for updates on projects and maybe some inspiration for your next landscaping project.
        </p>
      </div>

      {/* Galeria de imagens */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
        {serviceItems.map((item, index) => (
          <div key={index} className="w-full aspect-square relative overflow-hidden">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProjectPage;

"use client";

import Image from "next/image";
import Link from "next/link";

const serviceItems = [
  {
    title: "Hardscape",
    src: "/assets/img/services/hardscape/hardscape-1.jpg",
    alt: "Hardscape",
    href: "/what/hardscape",
  },
  {
    title: "Softscape",
    src: "/assets/img/services/softscape/softscape-2.jpg",
    alt: "Softscape",
    href: "/what/softscape",
  },
  {
    title: "Features",
    src: "/assets/img/services/features/features-1.jpg",
    alt: "Features",
    href: "/what/features",
  },
];

const WhatWeDoPage = () => {
  return (
    <main className="bg-white min-h-screen pt-[220px] md:pt-[250px] flex flex-col items-center justify-center py-20 px-4">
           <h1 className="text-3xl font-primary text-center mb-12">What We Do</h1>
      {/* Texto introdutório */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-base text-justify leading-relaxed font-sans mb-16">
  <p>
    At <strong>Garden Builder</strong> we design, build and maintain Dublin’s finest gardens.
    Our clients are both residential and commercial, in collaboration with garden designers and landscape architects.
  </p>
  <p>
    We work closely with our clients to interpret their vision, bringing them to life and creating inspiring outdoor spaces.
    We pride ourselves on our creativity and flexibility in creating gardens that provide attractive and enjoyable exteriors.
  </p>
</div>

      {/* Galeria de serviços com links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl items-center justify-center">
  {serviceItems.map((item, index) => (
    <Link
      href={item.href}
      key={index}
      className="group text-center block"
    >
      <h2 className="mb-4 text-lg font-primary transition-all uppercase duration-200 group-hover:font-bold">
        {item.title}
      </h2>
      <div className="w-full aspect-square relative overflow-hidden">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </Link>
  ))}
</div>
    </main>
  );
};

export default WhatWeDoPage;

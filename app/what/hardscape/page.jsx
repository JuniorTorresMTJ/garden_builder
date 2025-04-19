"use client";

import Image from "next/image";

const images = [
  "/assets/img/services/hardscape/hardscape-6.jpg",
  "/assets/img/services/hardscape/hardscape-1.jpg",
  "/assets/img/services/hardscape/hardscape-1.webp",
  "/assets/img/services/hardscape/hardscape-2.jpg",
  "/assets/img/services/hardscape/hardscape-2.webp",
  "/assets/img/services/hardscape/hardscape-3.jpg", 
  "/assets/img/services/hardscape/hardscape-3.webp",
  "/assets/img/services/hardscape/hardscape-4.webp",
  "/assets/img/services/hardscape/hardscape-5.webp",
];

export default function HardscapePage() {
  return (
    <main className="bg-white min-h-screen pt-[230px] py-20 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold font-primary text-center mb-12">Hardscape</h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-base text-justify leading-relaxed font-sans mb-16">
        <p className="text-base font-sans leading-relaxed">
          Simply put, hardscape is any of the non-living elements in your landscape design,
          the harder design elements in your garden. These elements form the foundation of
          the garden, separating the softer living elements and creating usable spaces.
        </p>
        <p>
          The hardscaping elements are also what is not visual such as drainage and irrigation.
          As with any construction project, the foundation has to be right so the garden can
          mature and thrive.
        </p>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => {
          const isHardscape3 = src.includes("hardscape-3.jpg"); // ou index === 5
          return (
            <div
              key={index}
              className={`w-full aspect-square relative ${isHardscape3 ? "hidden md:block" : ""}`}
            >
              <Image
                src={src}
                alt={`Hardscape ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}

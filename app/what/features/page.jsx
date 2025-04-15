"use client";

import Image from "next/image";

const images = [
  "/assets/img/services/features/features-1.jpg",
  "/assets/img/services/features/features-1.webp",
  "/assets/img/services/features/features-2.jpg",
  "/assets/img/services/features/features-3.jpg",
  "/assets/img/services/features/features-4.jpg",
  "/assets/img/services/features/features-5.jpg",
  "/assets/img/services/features/features-6.jpg",
  "/assets/img/services/features/features-7.jpg",
  "/assets/img/services/features/features-8.jpg",
];

export default function FeaturesPage() {
  return (
    <main className="bg-white min-h-screen pt-[220px] md:pt-[250px] px-4 py-20 flex flex-col items-center">
      <h1 className="text-3xl font-primary text-center mb-12">Features</h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-base text-justify leading-relaxed font-sans mb-16">
        <p className="text-base font-sans leading-relaxed">
          We are a garden design and build landscaping company. This includes garden design and both the hard and soft elements of landscaping.
          
        </p>
        <p>
        We are also experienced with more bespoke features such as installing outdoor kitchens, water features, pergolas, fire tables, irrigation systems and garden lighting. </p>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="w-full aspect-square relative">
            <Image
              src={src}
              alt={`Feature ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}

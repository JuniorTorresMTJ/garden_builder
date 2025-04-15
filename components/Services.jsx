"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Button from "./Button";

import {
  PiTreeFill,
  PiFlowerTulipFill,
  PiDropFill,
  PiSunHorizonFill,
  PiSparkleFill,
  PiKnifeFill,
  PiHammerFill,
} from "react-icons/pi";
import Pretitle from "./Pretitle";

const serviceData = [
  {
    name: "groundworks",
    icon: <PiHammerFill />,
    title: "Ground Works & Drainage",
    description:
      "Preparing the land with precision, our groundworks and drainage services ensure your garden has a solid, well-managed foundation from the start.",
    serviceList: [
      "Site preparation",
      "Drainage systems",
      "Soil improvement",
      "Levelling and grading",
    ],
    thumbs: [
      { url: "/assets/img/services/groundworks-1.png" },
      { url: "/assets/img/services/groundworks-2.png" },
    ],
  },
  {
    name: "paving",
    icon: <PiSunHorizonFill />,
    title: "Paving",
    description:
      "We design and install durable and elegant paving solutions, creating inviting paths, patios, and social spaces that blend with your landscape.",
    serviceList: [
      "Natural stone paving",
      "Porcelain & granite",
      "Driveways",
      "Pathways & patios",
    ],
    thumbs: [
      { url: "/assets/img/services/paving-1.png" },
      { url: "/assets/img/services/paving-2.png" },
    ],
  },
  {
    name: "planting",
    icon: <PiFlowerTulipFill />,
    title: "Planting",
    description:
      "Bringing your garden to life with carefully selected plants and expert design that ensures beauty through every season.",
    serviceList: [
      "Shrubs & trees",
      "Perennials & annuals",
      "Seasonal colour design",
      "Soil conditioning",
    ],
    thumbs: [
      { url: "/assets/img/services/planting-1.png" },
      { url: "/assets/img/services/planting-2.png" },
    ],
  },
  {
    name: "irrigation",
    icon: <PiDropFill />,
    title: "Irrigation",
    description:
      "Automated and manual irrigation systems designed for efficient water use, keeping your garden healthy and green all year long.",
    serviceList: [
      "Drip systems",
      "Sprinklers",
      "Rainwater harvesting",
      "Timers & controllers",
    ],
    thumbs: [
      { url: "/assets/img/services/irrigation-1.png" },
      { url: "/assets/img/services/irrigation-2.png" },
    ],
  },
  {
    name: "lawns",
    icon: <PiSunHorizonFill />,
    title: "Lawns",
    description:
      "From lush new lawns to turf repairs, we create vibrant green spaces that are soft underfoot and easy to maintain.",
    serviceList: [
      "Turf laying",
      "Artificial grass",
      "Lawn restoration",
      "Soil preparation",
    ],
    thumbs: [
      { url: "/assets/img/services/lawns-1.png" },
      { url: "/assets/img/services/lawns-2.png" },
    ],
  },
  {
    name: "features",
    icon: <PiTreeFill />,
    title: "Garden Features",
    description:
      "Add personality to your garden with bespoke features such as pergolas, water elements, and decorative structures.",
    serviceList: [
      "Pergolas & trellises",
      "Garden walls",
      "Water features",
      "Raised beds",
    ],
    thumbs: [
      { url: "/assets/img/services/features-1.png" },
      { url: "/assets/img/services/features-2.png" },
    ],
  },
  {
    name: "lighting",
    icon: <PiSparkleFill />,
    title: "Lighting",
    description:
      "Enhance safety and ambiance with custom garden lighting solutions that highlight your space, day and night.",
    serviceList: [
      "Pathway lights",
      "Accent lighting",
      "Wall-mounted LEDs",
      "Timers & smart systems",
    ],
    thumbs: [
      { url: "/assets/img/services/lighting-1.png" },
      { url: "/assets/img/services/lighting-2.png" },
    ],
  },
  {
    name: "kitchens",
    icon: <PiKnifeFill />,
    title: "Outdoor Kitchens",
    description:
      "Designing outdoor cooking and dining spaces that combine functionality with style — perfect for entertaining and relaxing.",
    serviceList: [
      "Built-in BBQs",
      "Counters & sinks",
      "Shelters & pergolas",
      "Storage solutions",
    ],
    thumbs: [
      { url: "/assets/img/services/kitchens-1.png" },
      { url: "/assets/img/services/kitchens-2.png" },
    ],
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const fadeInVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
};

const Services = () => {
  const [activeTab, setActiveTab] = useState(serviceData[0].name);
  return (
    <section className="pt-16 xl:pt-32" id="services">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto mb-20"
        >
          <Pretitle text="Our Services" center />
          <h2 className="h2 mb-3">Solutions We Provide</h2>
          <p className="mb-11 max-w-[600px] mx-auto">
            We offer bespoke landscaping services designed to transform outdoor
            spaces into beautiful, functional gardens. From groundwork to
            planting, lighting, and outdoor kitchens, every project is crafted
            by hand with care, precision, and a deep respect for nature. Whether
            it's a full garden redesign or a simple upgrade, our team brings
            experience, creativity, and a passion for outdoor living.
          </p>
        </motion.div>

        {/* tabs */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Tabs
            defaultValue={serviceData[0].name}
            onValueChange={(value) => setActiveTab(value)}
            className="flex flex-col xl:flex-row w-full gap-[30px]"
          >
            <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[12px] h-full w-full rounded-none p-0 bg-transparent xl:w-[345px]">
              {serviceData.map((item) => {
                return (
                  <TabsTrigger
                    key={item.name}
                    value={item.name}
                    className="w-full rounded-none h-[70px] flex items-center relative shadow-custom p-0 outline-none"
                  >
                    <div
                      className={`w-[70px] h-[70px] flex items-center justify-center absolute left-0 ${
                        activeTab === item.name
                          ? "bg-primary text-white"
                          : "bg-accent text-primary"
                      }`}
                    >
                      <div className="text-4xl">{item.icon}</div>
                    </div>
                    <div className="uppercase font-primary text-base font-semibold tracking-[.6px] w-[100px] ml-[80px]">
                      {item.name}
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {/* tabs content */}
            <div className="flex-1 bg-white shadow-custom xl:h-[644px] min-h-[400px] p-[24px] overflow-y-auto">
              {serviceData.map((item) => (
                <TabsContent
                  key={item.name}
                  value={item.name}
                  className="m-0 h-full"
                >
                  <motion.div
                    variants={fadeInVariant}
                    initial="hidden"
                    whileInView="show"
                    exit="hidden"
                    className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-[30px] h-full"
                  >
                    {/* images */}
                    <div className="flex md:flex-col gap-5 xl:gap-[30px] justify-center h-full">
                      {item.thumbs.map((thumb, index) => (
                        <div
                          key={index}
                          className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px] "
                        >
                          <Image src={thumb.url} fill alt="" />
                        </div>
                      ))}
                    </div>
                    {/* text & button */}
                    <div className="flex-1 flex flex-col justify-center h-full">
                      <div>
                        <h3 className="h3 mb-6">{item.title}</h3>
                        <p className="mb-10">{item.description}</p>
                        {/* service list */}
                        <ul className="grid grid-cols-2 gap-4 mb-12">
                          {item.serviceList.map((service, index) => {
                            return (
                              <li
                                key={index}
                                className="flex items-center gap-4"
                              >
                                <div className="w-[6px] h-[6px] bg-accent"></div>
                                <div className="capitalize font-medium text-primary">
                                  {service}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                        {/* btn */}
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

import Image from "next/image";
import Pretitle from "./Pretitle";
import Button from "./Button";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const About = () => {
  return (
    <div className="pt-16 xl:pt-32" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 md:gap-0 md:flex-row md:items-center">
          {/* text */}
          <div className="flex-1">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-[540px]"
            >
              {/* pretitle */}
              <Pretitle text="About us" />
              <h2 className="h2 mb-6">Focused On Excellence In Every Garden</h2>
              <p className="mb-11">
                At Campbell Landscapes, our unwavering commitment to excellence
                drives everything we do. From initial design to the final
                planting, we approach each garden with care, creativity, and
                attention to detail. With years of experience in transforming
                outdoor spaces, we blend functionality and beauty to create
                landscapes that truly reflect our clients' visions. Whether it’s
                a modern courtyard, a lush lawn, or a complete garden redesign,
                we meticulously craft every element to ensure lasting quality
                and natural harmony. Let us bring your outdoor dream to life —
                with expert craftsmanship, sustainable practices, and a deep
                passion for the art of landscaping.
              </p>
              {/* btn */}
              <ScrollLink to="contact" smooth spy offset={-80}>
                <Button text="Contact us" />
              </ScrollLink>
            </motion.div>
          </div>
          {/* img */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 xl:flex xl:justify-center"
          >
            <div className="xl:w-[444px] xl:h-[493px] relative">
              {/* bg */}
              <div className="hidden xl:flex w-[444px] h-[493px] bg-accent absolute -top-4 -left-4 -z-10"></div>
              <Image
                src={"/assets/img/about/img.png"}
                width={444}
                height={492}
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

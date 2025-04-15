import { RiChat1Line, RiSmartphoneLine } from "react-icons/ri";
import Socials from "@/components/Socials";
import Form from "@/components/Form";

import { fadeIn } from "@/variants";

const Contact = () => {
  return (
    <section className="min-h-screen pt-[225px]" id="contact">
      <div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <div className="w-full xl:h-[700px] shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-accent">
          <div className="flex flex-col md:flex-row h-full gap-[40px] md:gap-[60px] xl:gap-[90px]">
            {/* info */}
            <div className="w-full md:w-1/2 xl:max-w-[380px] xl:pr-[70px] xl:border-r xl:border-border/40 h-[640px]">
              <h4 className="text-[26px] font-primary uppercase  mb-6">
                Contact Us
              </h4>
              <p className="mb-9">
              Let’s bring your outdoor vision to life. Whether it’s a full garden transformation or a small upgrade, we’re here to help.
              </p>
              {/* contact items */}
              <div className="flex flex-col gap-[40px] mb-16">
                {/* contact item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiChat1Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] uppercase  font-primary leading-none mb-2">
                      Chat to us
                    </h5>
                    <p className="mb-4">Our friendly team is happy to answer your questions and guide you through your landscaping journey.</p>
                    <p className="font-semibold text-primary">
                      hi@gardenbuilder.com
                    </p>
                  </div>
                </div>
                {/* contact item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiSmartphoneLine className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] uppercase  font-primary leading-none mb-2">
                      Phone
                    </h5>
                    <p className="mb-4">Mon-Fri from 8am to 5pm.</p>
                    <p className="font-semibold text-primary">
                      +1 (555) 000-0000
                    </p>
                  </div>
                </div>
              </div>
              <Socials
                containerStyles="flex gap-[40px]"
                iconStyles="text-primary text-[20px]"
              />
            </div>
            {/* form */}
            <div className="flex-1">
              <p className="mb-9">
              Tell us more about your project — we’ll get back to you with a personalised plan. No obligation, just expert advice.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

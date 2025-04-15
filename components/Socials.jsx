import Link from "next/link";

import { RiInstagramLine, RiWhatsappLine } from "react-icons/ri";

const socials = [

  {
    icon: <RiInstagramLine />,
    path: "https://www.instagram.com/campbell.landscaping/",
  },
  {
    icon: <RiWhatsappLine />,
    path: "https://wa.me/353871234567",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => {
        return (
          <Link   href={item.path}
          key={index}
          className={`${iconStyles}`}
          target="_blank"
          rel="noopener noreferrer">
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

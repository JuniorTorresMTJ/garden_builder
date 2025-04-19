import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    icon: "/icons/instagram.svg",
    path: "https://www.instagram.com/gardenbuilder.ie/",
    alt: "Instagram",
  },
  {
    icon: "/icons/whatsapp.svg",
    path: "https://wa.me/353833131875",
    alt: "WhatsApp",
  }
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => (
        <Link
          href={item.path}
          key={index}
          className={`${iconStyles}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={item.icon}
            alt={item.alt}
            width={24}
            height={24}
            className="hover:scale-110 transition-transform"
          />
        </Link>
      ))}
    </div>
  );
};

export default Socials;

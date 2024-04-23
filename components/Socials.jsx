"use client";

import Link from "next/link";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
} from "react-icons/ri";

const icons = [
  {
    path: "https://www.linkedin.com/in/austin-farr7/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/austinfarr",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.instagram.com/austinfarr7/",
    name: <RiInstagramFill />,
  },
];

export const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link
          key={index}
          href={icon.path}
          className="text-primary hover:text-accent transition-all"
        >
          <div className={`${iconStyles}`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
};

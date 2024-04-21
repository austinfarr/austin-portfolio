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
    path: "/",
    name: <RiLinkedinFill />,
  },
  {
    path: "/",
    name: <RiGithubFill />,
  },
  {
    path: "/",
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

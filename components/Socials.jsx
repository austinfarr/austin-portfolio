"use client";

import { Mail, MailIcon } from "lucide-react";
import Link from "next/link";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
  RiMailAddFill,
  RiMailFill,
  RiMailSendFill,
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
  {
    path: "/contact",
    name: <RiMailSendFill />,
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

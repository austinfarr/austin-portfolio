import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { SheetClose } from "./ui/sheet";

const links = [
  { name: "home", path: "/" },
  { name: "my projects", path: "/projects" },
  { name: "contact me", path: "/contact" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles, setOpen }) => {
  const path = usePathname();

  const handleClick = () => {
    if (setOpen) {
      setOpen(false);
    } else {
      console.log("No set open");
    }
  };

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`capitalize ${linkStyles}`}
            onClick={handleClick}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              ></motion.span>
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;

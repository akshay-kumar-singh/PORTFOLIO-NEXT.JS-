import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className="text-accent hover:text-gradient-primary transition duration-300">
      {title}
    </Link>
  );
};

export default NavLink;

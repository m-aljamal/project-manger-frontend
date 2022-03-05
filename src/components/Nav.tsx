import { createStyles } from "@mantine/core";
import { Link, useMatch, useParams } from "react-router-dom";
import { useAuth } from "src/context/auth-context";
import { adminLinks, useProjectLinks } from "src/utils/links";

interface ILink {
  link: {
    label: string;
    to: string;
    icon: JSX.Element;
  };
}

const useStyles = createStyles((theme, _params, getRef) => {
  return {
    root: {},
  };
});

function NavLink({ link }: ILink) {
  const match = useMatch(link.to);
  return (
    <Link
      to={link.to}
      className={` hover:bg-gray-700 hover:text-white hover:rounded-md flex items-center pr-4    ${
        match ? "bg-gray-700 rounded-md text-white" : "text-gray-400"
      }`}
    >
      <div className="flex gap-4 py-3">
        <span className="text-2xl ">{link.icon}</span>
        {link.label}
      </div>
    </Link>
  );
}

function Nav() {
  const { user }: any = useAuth();

  const projectLinks = useProjectLinks();

  const links = user.role === "ADMIN" ? adminLinks : projectLinks;

  return (
    <nav>
      <ul>
        {links?.map((link) => (
          <li key={link.label}>
            <NavLink link={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

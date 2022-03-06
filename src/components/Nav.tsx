import { createStyles, List } from "@mantine/core";
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
    root: {
      display: "flex",
      paddingRight: "0.6rem",
      alignItems: "center",
      margin: "0.4rem 0",
      "&:hover": {
        color: "white",
        background: theme.colors.gray[1],
        borderRadius: "0.4rem",
      },
    },
    match: {
      color: "white",
      background: theme.colors.gray[1],
      borderRadius: "0.4rem",
    },
    notMatch: {
      color: theme.colors.gray[1],
    },
    linkContainer: {
      display: "flex",
      gap: "0.4rem",
      padding: "0.4rem 0",
      alignItems: "center",
    },
    icon: {
      fontSize: "1.5rem",
    },
  };
});

function NavLink({ link }: ILink) {
  const match = useMatch(link.to);
  const { classes } = useStyles();
  return (
    <Link
      to={link.to}
      className={`${match ? classes.match : classes.notMatch} ${classes.root}`}
    >
      <div className={classes.linkContainer}>
        <p className={classes.icon}>{link.icon}</p>
        <p> {link.label}</p>
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
      <ul style={{ padding: 0 }}>
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

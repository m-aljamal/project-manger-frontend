import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import { useAuth } from "src/context/auth-context";
import FullPageErrorFallback from "./FullPageErrorFallback";
import Nav from "./Nav";
import { FaPowerOff } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import face from "src/face.jpg";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { createStyles } from "@mantine/core";
const AppLayout = () => {
  const { classes } = useStyles();

  return (
    <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
      <div className={classes.root}>
        <div className={classes.slideBar}>
          <UserInfo />
          <Nav />
        </div>
        <main className={classes.navBar}>
          <Header />
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Outlet />
          </ErrorBoundary>
        </main>
      </div>
    </ErrorBoundary>
  );
};

function ErrorFallback({ error }: any) {
  return (
    <div role="alert">
      <p>يوجد مشكلة في التطبيق.</p>
      <pre>{error.response.errors[0].message}</pre>
      {/* <p>{error.stack}</p> */}
    </div>
  );
}

export default AppLayout;

const UserInfo = () => {
  const { user, logout }: any = useAuth();
  const { classes } = useStyles();
  return (
    <div>
      <div className={classes.userInfo}>
        <BiMessageDetail />
        <FaPowerOff onClick={logout} />
      </div>
      <div className={classes.imageContainer}>
        <img src={face} alt="falce" className={classes.image} />
      </div>
      <div className={classes.infoContainer}>
        <p className={classes.infoName}>{user?.name}</p>
        <p className={classes.userName}>{user?.username}</p>
      </div>
    </div>
  );
};

const Header = () => {
  const useStyles = createStyles((theme, _params, getRef) => {
    return {
      container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.8rem",
        borderBottom: "1px solid #e6e6e6",
        marginBottom: "2rem",
        boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
      icon: {
        fontSize: "1.5rem",
        color: theme.colors.gray[1],
      },
    };
  });
  const { classes } = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <AiOutlineMenu className={classes.icon} />
        <AiOutlineSearch className={classes.icon} />
      </div>
    </div>
  );
};

const useStyles = createStyles((theme, _params, getRef) => {
  return {
    root: {
      display: "flex",
      justifyContent: "space-between",
      direction: theme.dir,
    },
    slideBar: {
      backgroundColor: theme.colors.slate[0],
      color: theme.colors.gray[0],
      height: "100vh",
      padding: "1rem",
      width: "20rem",
      position: "sticky",
      top: 0,
      textAlign: "center",
    },
    navBar: {
      width: "100%",
    },
    userInfo: {
      display: "flex",
      justifyContent: "space-around",
    },
    imageContainer: {
      width: "6rem",
      margin: "auto",
      marginTop: "2rem",
    },
    image: {
      borderRadius: "50%",
      width: "100%",
    },
    infoContainer: {
      marginBottom: "3rem",
    },
    infoName: {
      color: "white",
      fontSize: "1.5rem",
      margin: 0,
      paddingTop: "2rem",
    },
    userName: {
      fontSize: "0.9rem",
      padding: "0",
      margin: 0,
      color: theme.colors.gray[2],
    },
  };
});

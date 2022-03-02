import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import { useAuth } from "src/context/auth-context";
import FullPageErrorFallback from "./FullPageErrorFallback";
import Nav from "./Nav";
import { FaPowerOff } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import face from "src/face.jpg";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { useMantineTheme } from "@mantine/core";
const AppLayout = () => {
  const theme = useMantineTheme();
  return (
    <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
      <div className="flex justify-between" style={{ direction: theme.dir }}>
        <div className="bg-slate-900 text-gray-200 h-screen p-2 w-80 pt-5 sticky top-0  text-center ">
          <UserInfo />
          <Nav />
        </div>
        <main className="w-full container">
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

  return (
    <div>
      <div className="flex justify-around">
        <BiMessageDetail className="text-gray-300 text-xl" />
        <FaPowerOff
          className="text-gray-300 cursor-pointer text-lg"
          onClick={logout}
        />
      </div>
      <div className="w-24 h-24 mx-auto mt-8 mb-3">
        <img src={face} alt="falce" className="rounded-full " />
      </div>
      <div className="mb-8">
        <p className=" text-white text-lg">{user?.name}</p>
        <p className="text-sm">{user?.username}</p>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="shadow-sm">
      <div className="flex justify-between   my-4">
        <AiOutlineMenu className="text-xl text-gray-700" />
        <AiOutlineSearch className="text-2xl text-gray-700 " />
      </div>
      <hr className="-mx-4" />
    </div>
  );
};

import Nav from "./components/Nav/Nav";
import useWindowWidth from "./hooks/useWindowWidth";

import { Outlet } from "react-router-dom";

const links = [
  {
    text: "HOME",
    to: "/",
  },
  {
    text: "BUTTONS",
    to: "/buttons",
  },
  {
    text: "INPUTS",
    to: "/inputs",
  },
  {
    text: "MODAL",
    to: "/modal",
  },
];

function App() {
  const width = useWindowWidth();

  return (
    <>
      {width > 700 && <Nav links={links} />}
      <Outlet />
    </>
  );
}

export default App;

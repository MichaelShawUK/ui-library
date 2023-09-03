import Nav from "./components/Nav/Nav";

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
  return (
    <>
      <Nav links={links} />
      <Outlet />
    </>
  );
}

export default App;

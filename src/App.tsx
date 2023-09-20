import Header from "./components/Header/Header";
import InteractiveCard from "./components/InteractiveCard/InteractiveCard";
import useViewMode from "./hooks/useViewMode";

import { Outlet, useLocation } from "react-router-dom";

function App() {
  const viewMode = useViewMode();
  console.log(viewMode);

  const isHome = useLocation().pathname === "/";

  return (
    <>
      <Header />
      {isHome && <InteractiveCard />}
      <Outlet />
    </>
  );
}

export default App;

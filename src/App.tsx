import Header from "./components/Header/Header";
import useViewMode from "./hooks/useViewMode";

import { Outlet } from "react-router-dom";

function App() {
  const viewMode = useViewMode();
  console.log(viewMode);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;

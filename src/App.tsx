import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import TopBar from "./components/topBar/TopBar";
import { useState } from "react";

function App() {
  const [topBarIsOpened, setTopBarIsOpened] = useState(true);
  return (
    <div>
      {topBarIsOpened && <TopBar setTopBarIsOpened={setTopBarIsOpened} />}

      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

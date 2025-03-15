import { useState } from "react";
import Container from "./components/Container";
import Loader from "./components/Loader";
import Layout from "./Layout/Layout";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  return (
    <>
      <Layout />
      {/* {showIntro ? (
        <Loader onComplete={() => setShowIntro(false)} />
      ) : (
        <Layout />
      )} */}
    </>
  );
}

export default App;

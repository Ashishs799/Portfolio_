import { useEffect, useState } from "react";
import Container from "./components/Container";
import Loader from "./components/Loader";
import Layout from "./Layout/Layout";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <Layout /> */}

      {showIntro ? (
        <Loader onComplete={() => setShowIntro(false)} />
      ) : (
        <Layout />
      )}
    </>
  );
}

export default App;

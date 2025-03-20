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
      <Layout />
      {/* <div>
        <div class="relative w-full">
          <div class="h-screen bg-red-500 text-white flex items-center justify-center text-3xl font-bold ">
            Section 1
          </div>

          <div class="h-screen bg-blue-500 text-white flex items-center justify-center text-3xl font-bold ">
            Section 2
          </div>

          <div class="h-screen bg-green-500 text-white flex items-center justify-center text-3xl font-bold sticky bottom-0 -z-10">
            Section 3
          </div>
        </div>
      </div> */}

      {/* {showIntro ? (
        <Loader onComplete={() => setShowIntro(false)} />
      ) : (
        <Layout />
      )} */}
    </>
  );
}

export default App;

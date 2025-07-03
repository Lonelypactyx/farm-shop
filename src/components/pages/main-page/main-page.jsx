import React from "react";
import About from "/src/components/blocks/about/about";
import Advantages from "/src/components/blocks/advantages/advantages";
import advantagesData from "/src/mocks/advantages";

function MainPage() {
  return (
    <main>
      <About />
      <Advantages advantages={advantagesData} />
    </main>
  );
}

export default MainPage;

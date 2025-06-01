import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Home, Project, Skills, Layout } from "./Essential";
import { Hero } from "./Essential/Hero";

function App() {
  return (
    <Hero>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Hero" element={<Hero />} />
            <Route path="Project" element={<Project />} />
            <Route path="Skills" element={<Skills />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Hero>
  );
}

export default App;

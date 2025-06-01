import { createContext, useContext } from "react";

import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import Tea from "../Project_images/Tea_Station.jpg";
import Portfolio from "../Project_images/Portfolio_Sample.jpg";
import Travel from "../Project_images/Travel.jpg";
import Comfy from "../Project_images/Comfy_Store.jpg";
import Products from "../Project_images/Good_Product.jpg";

const userContext = createContext();

export const Hero = ({ children }) => {
  const languages = [
    {
      name: "java",
      icon: <FaJava />,
    },
    {
      name: "python",
      icon: <FaPython />,
    },
  ];

  const data = [
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "PostgreSQL",
      icon: <BiLogoPostgresql />,
    },
  ];

  const web = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
    },
    {
      name: "Javascript",
      icon: <IoLogoJavascript />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      name: "Nextjs",
      icon: <RiNextjsFill />,
    },
    {
      name: "Nodejs",
      icon: <FaNodeJs />,
    },
    {
      name: "Express",
      icon: <SiExpress />,
    },
  ];

  const tools = [
    {
      name: "Git",
      icon: <FaGitSquare />,
    },
    {
      name: "Shell",
      icon: <SiGnubash />,
    },
    {
      name: "Linux",
      icon: <FaLinux />,
    },
  ];

  const projects = [
    {
      id: "good",
      website: "https://comfy-store2.netlify.app/",
      name: "Comfy store",
      img: Comfy,
      description:
        "Built with React, utilizing Redux Toolkit for cart state management and React Query for efficient product data fetching/caching (boost efficiency by >=50% for repeated data requests).Implemented product display, category filtering, and full cart CURD functionality with React Router for navigation. Developed responsive UI using Tailwind CSS with mobile-first optimizations.",
    },
    {
      id: "good",
      website: "https://goodproducts.netlify.app/",
      name: "Good Store",
      img: Products,
      description:
        "Develop using pure Javascript (ES6+) with dynamic DOM rendering for product listings and cart.Integrated Fetch API for product data and local Storage for cart persistence.Created responsive layouts using Flexbox/Grid with mobile adaption.Implemented modular code architecture with optimized event handling.Ensured 100% cart persistence with local Storage, supporting items updates and removal.",
    },
    {
      id: "normal",
      website: "https://zhiyuansun-tea-station.netlify.app/",
      name: "Tea Station",
      img: Tea,
      description: " ",
    },
    {
      id: "normal",
      website: "https://cool-gaufre-0b5784.netlify.app/",
      name: "Back Road",
      img: Travel,
      description: " ",
    },
    {
      id: "normal",
      website: "https://porfolio-setup.netlify.app/",
      name: "Portfolio Setup",
      img: Portfolio,
      description: " ",
    },
  ];

  return (
    <userContext.Provider value={{ languages, data, web, tools, projects }}>
      {children}
    </userContext.Provider>
  );
};
export const GetContext = () => useContext(userContext);

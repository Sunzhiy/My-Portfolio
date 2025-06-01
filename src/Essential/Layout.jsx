import { Outlet, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { ImArrowUp } from "react-icons/im";
import { MdWbSunny } from "react-icons/md";
import { WiMoonWaxingCrescent3 } from "react-icons/wi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
// import { HiOutlineMail } from "react-icons/hi";

const Layout = () => {
  const [OpenBox, setOpenBox] = useState(false);
  const [DarkMode, setDarkMode] = useState(getDarkModeFromLocalStorage());

  function OpenNavbar() {
    setOpenBox(true);
  }

  function HandleOnClick(e) {
    if (OpenBox && e.target.parentElement.id !== "openBox") {
      setOpenBox(false);
    }
  }

  function toggleButton() {
    if (DarkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }

  function getDarkModeFromLocalStorage() {
    const mode = localStorage.getItem("DarkMode");
    return mode === "dark" ? true : false;
  }

  useEffect(() => {
    if (DarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("DarkMode", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("DarkMode", "light");
    }
  }, [DarkMode]);

  const Links = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/About" },
    { id: 3, name: "Skills", path: "/Skills" },
    { id: 4, name: "Project", path: "/Project" },
    { id: 5, name: "Contact", path: "/Contact" },
  ];

  return (
    <div onClick={HandleOnClick}>
      <nav className="h-15 w-full fixed bg-pink-800 content-center flex flex-auto justify-between items-center z-10">
        <div className="pl-1.5 pr-1.5 pt-1.5 pb-1.5 ml-19 hidden sm:block bg-neutral-200 text-orange-700 font-bold font-serif border-4 border-amber-500 rounded-xl">
          Hello
        </div>

        <FaBars
          onClick={OpenNavbar}
          className="block sm:hidden ml-5 text-2xl text-orange-300 cursor-pointer  hover:text-3xl"
        />

        <div className="hidden sm:flex justify-center space-x-5">
          {Links.map((link) => (
            <Link
              className="bg-yellow-400 h-10 w-20 rounded-4xl content-center text-center cursor:pointer hover:bg-yellow-500
              hover:text-amber-50"
              key={link.id}
              to={link.path}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="sm:mr-15 mr-5 text-2xl">
          {!DarkMode && (
            <MdWbSunny
              className="text-amber-300 cursor-pointer"
              onClick={toggleButton}
            />
          )}
          {DarkMode && (
            <WiMoonWaxingCrescent3
              className="text-neutral-300 cursor-pointer"
              onClick={toggleButton}
            />
          )}
        </div>
      </nav>
      {OpenBox && (
        <div
          id="openBox"
          className="sm:hidden fixed z-10 bg-cyan-400 mt-16 ml-1 rounded-2xl pt-3 pb-3 w-22"
        >
          {Links.map((link) => (
            <Link
              className="hover:text-fuchsia-500 pl-3 w-full hover:bg-lime-300
              hover:pl-3.5
               hover:border-l-3 cursor:pointer block"
              key={link.id}
              to={link.path}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
      {!OpenBox && (
        <div className="sm:hidden fixed z-10 mt-13 ml-4 rounded-2xl pt-3 pb-3 pl-1 w-22 text-2xl transition delay-150 duration-300 ease-in-out animate-bounce">
          <span className="text-red-600">
            <ImArrowUp />
          </span>
          <span className="text-orange-700">Explore</span>
        </div>
      )}
      <main className="pt-15 w-full h-[100vh]  pb-15">
        <Outlet />
      </main>

      <footer className="flex w-full bottom-0 h-15 fixed  bg-emerald-400 justify-center items-center space-x-5 text-2xl">
        <p className="animate-text sm:block hidden">Jason</p>
        <p className="animate-color sm:hidden block text-xl">Jason</p>
        <a
          href="https://www.linkedin.com/in/zhiyuan-sun-401167214/"
          target="_blank"
        >
          <BsLinkedin className="text-blue-800 hover:text-3xl" />
        </a>
       
        <a href="https://github.com/Sunzhiy" target="_blank">
          <FaGithub className="text-black hover:text-3xl" />
        </a>
        <p className="animate-color sm:hidden block text-xl">Sun</p>
        <p className="animate-text sm:block hidden">Sun</p>
      </footer>
    </div>
  );
};
export default Layout;

import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import close from "../assets/close2.svg";
import menu from "../assets/menu2.svg";
// import logo from "../assets/stake-logo.svg";

const navLinks = [
  {
    id: "login",
    title: "Login",
  },
  // {
  //   id: "login",
  //   title: "Properties",
  // },
  // {
  //   id: "login",
  //   title: "Sell",
  // },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <img src="/logo.webp" alt="logo" className="w-[124px] cursor-pointer" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-normal cursor-pointer text-lg hover:-translate-y-1 transition-all duration-300 hover:underline ${
              active === nav.title ? "text-lightGreen" : "text-black"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={`/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain text-6xl"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-lightGreen`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

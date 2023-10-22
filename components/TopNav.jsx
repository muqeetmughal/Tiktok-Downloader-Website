import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import NavMenu from "./NavMenu";
import ThemeToggler from "./ThemeToggler";

const navMenu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Download Tiktok Video",
    link: "/download-tiktok-video-without-watermark",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  // {
  //   name: "Privacy Policy",
  //   link: "/privacy-policy",
  // },
  // {
  //   name: "Terms of Service",
  //   link: "/terms-of-service",
  // },
  // {
  //   name: "About",
  //   link: "/about",
  //   children: [

  //   ],
  // },
];
const TopNav = () => {
  const { locale, locales, asPath } = useRouter();
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    // setIsDropdownOpen(!isDropdownOpen);
    navbarRef.current.classList.toggle("hidden");
    navbarRef.current.classList.toggle("block");
  };
  const navbarRef = useRef(null);

  const router = useRouter();

  // function handleMobileHamburgerClick (){
  // if ( navbarRef.current.style.visibility='hidden'){
  //     navbarRef.current.style.visibility='visible';
  // navbarRef.current.style.opacity=1;

  // }else if (navbarRef.current.style.visibility='visible'){
  //   navbarRef.current.style.visibility='hidden';
  //   navbarRef.current.style.opacity=0;
  // }else{

  // }

  // }

  // Use the router.events to listen for route changes
  React.useEffect(() => {
    const handleRouteChange = (url) => {
      if (navbarRef.current) {
        navbarRef.current.classList.toggle("hidden");
        navbarRef.current.classList.toggle("block");
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  });
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            ref={navbarRef}
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-max hidden lg:hidden`}
          >
            {navMenu.map((menu, i) => (
              <li key={i}>
                <Link className="btn btn-ghost" href={menu.link}>
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link href={"/"}>
          <div className="btn btn-ghost normal-case text-xl text-purple-600">
            ttdownloader.io
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navMenu.map((menu, i) => (
            <li key={i} className="flex">
              <Link className="btn btn-ghost" href={menu.link}>
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeToggler />
      </div>
    </div>
  );
};

export default TopNav;

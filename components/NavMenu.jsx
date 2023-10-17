import React from "react";
import Link from "next/link";

const navMenu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    name: "Terms of Service",
    link: "/terms-of-service",
  },
];

const NavMenu = (props) => {
  return (
    <>
      <ul
        tabIndex={0}
        className={
          props.isMobile
            ? "menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            : "menu menu-horizontal p-0"
        }
      >
        {navMenu.map((menu, i) => {
          if (menu.children) {
            return (
              <li key={i} tabIndex={0}>
                <a className="justify-between">
                  {menu.name}
                  {props.isMobile ? (
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  ) : (
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  )}
                </a>
                <ul className="p-2">
                  {menu.children.map((child_menu, c_i) => {
                    return (
                      <li key={c_i}>
                        <Link href={menu.link + child_menu.link}>
                          {child_menu.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          } else {
            return (
              <li key={i}>
                <Link href={menu.link}>{menu.name}</Link>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

export default NavMenu;

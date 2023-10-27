import React from "react";

const menuList = [
  { name: "[0] Home", path: "/" },
  { name: "[1] About me", path: "/aboutme" },
];

export const Header = () => {
  return (
    <section className="grid grid-cols-3 m-4">
      <div>
        <a href="/">
          <div className="text-lg font-medium">Temuujin</div>
        </a>
      </div>
      <nav className="col-span-2">
        <ul className="list-none flex gap-10">
          {menuList.map((menu) => (
            <li key={menu.path}>
              <MenuItem name={menu.name} path={menu.path} />
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

const MenuItem = ({ name, path }) => {
  const isActive = path === "/";

  return (
    <a href={`#${path}`}>
      <div
        className={`${
          isActive ? "nav-active-menu bg-primary text-secondary" : ""
        } nav-menu relative text-sm font-thin hover:text-secondary px-1`}
      >
        {name}
      </div>
    </a>
  );
};

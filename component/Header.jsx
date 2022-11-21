import Link from "next/link";
import React from "react";
import style from "./Header.module.scss";

const Header = ({ isActive }) => {
  return (
    <div className={`${style.container}`}>
      <div className={style.title}>
        <Link href={`/`}>
          <img src="/Yoko's portoforio.png" />
        </Link>
        <Link href={`/`}>
          <h1>Leaf Field</h1>
        </Link>
      </div>
      <nav className={style.navi}>
        <ul>
          <li>portfolio</li>
          <li>
            <Link href={`/page/1`}>blog</Link>
          </li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

import React from "react";
import Link from "next/link";
const Menu = props => {
  return (
    <div className="fixedMenu">
      <Link href="/">
        <a title="Home">Home</a>
      </Link>
      <Link href="/photography">
        <a title="Photography">Photography</a>
      </Link>
      <Link href="/coding">
        <a title="Coding">Coding</a>
      </Link>
      <style jsx>{`
        .fixedMenu {
          display: flex;
          justify-content: space-around;
          padding: 0.5%;
        }
      `}</style>
    </div>
  );
};
export default Menu;

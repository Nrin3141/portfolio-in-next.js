import React from "react";
const Menu = props => {
  return (
    <div className="fixedMenu">
      <a href="#">Home</a>
      <a href="#">Projects</a>
      <a href="#">About me</a>
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

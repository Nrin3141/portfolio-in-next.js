import React from "react";
const Footer = props => {
  return (
    <div className="footer">
      <a href="#">Home</a>
      <a href="#">Contact</a>
      <a href="#">Impressum</a>
      <style jsx>{`
        .footer {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          padding: 0.5em;
        }
      `}</style>
    </div>
  );
};
export default Footer;

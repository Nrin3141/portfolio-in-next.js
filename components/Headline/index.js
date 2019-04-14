const Headline = () => (
  <div className="container">
    <span className="caption">Hello There!</span>
    <h1>This is going to be my awesome website!</h1>
    <style jsx>{`
      h1 {
        color: seagreen;
        opacity: 0.65;
      }
      .container {
        background: white;
        position: absolute;
        left: 0;
        top: 45%;
        margin: 0%;
        width: 100%;
        text-align: center;
        color: #000;
        z-index: 1;
      }
      .caption {
        background-color: #111;
        color: #fff;
        padding: 18px;
        font-size: 25px;
        letter-spacing: 10px;
      }
    `}</style>
  </div>
);
export default Headline;

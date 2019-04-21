const Social = () => (
  <div className="footer center">
    <h3>You can also find me here:</h3>
    <div className="icon-container">
      <a className="social" href="https://github.com/Nrin3141" target="blank">
        Github <i className="fab fa-github" />
      </a>
      <a
        className="social"
        href="https://www.linkedin.com/in/ricotrebeljahr"
        target="blank"
      >
        Linked
        <i className="fab fa-linkedin" />
      </a>
      <a
        className="social"
        href="https://stackoverflow.com/story/ricotrebeljahr"
        target="blank"
      >
        <i className="fab fa-stack-overflow" /> Stackoverflow
      </a>
      <a className="social" href="https://codepen.io/Nrin/" target="blank">
        Codepen <i className="fab fa-codepen" />
      </a>
    </div>
    <style jsx>{`
      .footer {
        position: relative;
        z-index: 1;
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 4vh;
      }
      .icon-container {
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      .social {
        color: black;
        text-decoration: none;
      }
      .social:hover {
        color: seagreen;
      }
      @media only screen and (max-width: 500px) {
        .icon-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
        }
      }
    `}</style>
  </div>
);
export default Social;

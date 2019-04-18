const Projects = () => (
  <div className="center">
    <h3>Stuff I built so far:</h3>
    <div className="icon-container">
      <div className="size">
        <a className="tile large" href="#" id="chess" />
      </div>
      <div className="size">
        <a
          className="tile large"
          href="https://codepen.io/Nrin/full/QzvwQe"
          id="tictactoe"
          target="blank"
        />
      </div>
      <div className="size">
        <a
          className="tile large"
          href="https://nrin3141.github.io/Snake-2.0/"
          id="snake"
          target="blank"
        />
      </div>
      <div className="size">
        <a
          className="tile large"
          href="https://nrin3141.github.io/Snake-2.0/"
          id="img"
          target="blank"
        />
      </div>
    </div>
    <style jsx>{`
      .size {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 22vw;
        width: 22vw;
      }
      .large {
        width: 18vw;
        height: 18vw;
      }
      .large:hover {
        width: 22vw;
        height: 22vw;
      }
      @media only screen and (max-width: 800px) {
        .size {
          height: 50vw;
          width: 50vw;
        }
        .large {
          width: 45vw;
          height: 45vw;
        }
        .large:hover {
          width: 50vw;
          height: 50vw;
        }
      }
      #img {
        background-image: url("/static/images/img.jpg");
        background-size: cover;
      }
      #chess {
        background-image: url("/static/images/chess.png");
      }
      #tictactoe {
        background-image: url("/static/images/tictactoe.png");
      }
      #snake {
        background-image: url("/static/images/snake.png");
      }
    `}</style>
  </div>
);
export default Projects;

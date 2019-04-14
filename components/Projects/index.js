const Projects = () => (
  <div className="full">
    <h3>Stuff I built so far:</h3>
    <div className="icon-container">
      <a className="tile large" href="#" id="chess" />
      <a
        className="tile large"
        href="https://codepen.io/Nrin/full/QzvwQe"
        id="tictactoe"
        target="blank"
      />
      <a
        className="tile large"
        href="https://nrin3141.github.io/Snake-2.0/"
        id="snake"
        target="blank"
      />
    </div>
    <style jsx>{`
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

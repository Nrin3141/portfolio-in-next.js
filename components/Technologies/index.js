const Technologies = () => (
  <div className="full">
    <h3>Technologies I use and love: </h3>
    <div className="icon-container">
      <div className="tile small" id="html" />
      <div className="tile small" id="css" />
      <div className="tile small" id="js" />
      <div className="tile small" id="meteor" />
    </div>
    <div className="icon-container top-margin">
      <div className="tile small" id="react" />
      <div className="tile small" id="node" />
      <div className="tile small" id="graphql" />
      <div className="tile small" id="mongo" />
    </div>
    <style jsx>{`
      #html {
        background-image: url("/static/images/html5.svg");
      }
      #css {
        background-image: url("/static/images/css3.svg");
      }
      #js {
        background-image: url("/static/images/javascript.png");
      }
      #meteor {
        background-image: url("/static/images/meteor-text.svg");
      }
      #mongo {
        background-image: url("/static/images/mongo.svg");
      }
      #graphql {
        background-image: url("/static/images/graphql.svg");
      }
      #node {
        background-image: url("/static/images/node.svg");
      }
      #react {
        background-image: url("/static/images/react.svg");
      }
    `}</style>
  </div>
);
export default Technologies;

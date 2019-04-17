import P5Canvas from "../P5Canvas";
const Parallax = props => {
  return (
    <div>
      <P5Canvas sketch={"sketch.js"} />
      {props.content}
      <P5Canvas sketch={"sketch.js"} />
      <style jsx>
        {`
          .img {
            height: 100vh;
            width: 100%;
            margin: 0;
            padding-bottom: 20vh;
          }
        `}
      </style>
    </div>
  );
};
export default Parallax;

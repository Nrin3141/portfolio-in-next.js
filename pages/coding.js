import Layout from "../components/Layout";
import Developer from "../components/Developer";
import _JSXStyle from "styled-jsx/style";

const Coding = () => (
  <div>
    <Layout content={<Developer />} parallax={true} />
    <style jsx>{`
      div {
        width: 100%;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
      }
    `}</style>
  </div>
);

export default Coding;

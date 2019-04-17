import Layout from "../components/Layout";
import P5Canvas from "../components/P5Canvas";

const Home = () => (
  <div>
    <Layout content={<P5Canvas sketch={"sketch.js"} />} />
  </div>
);
export default Home;

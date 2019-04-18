import Layout from "../components/Layout";
import P5Canvas from "../components/P5Canvas";
const Content = () => (
  <div>
    <h1>Hi there, I am Rico.</h1>
    <div className="img" />
    <style jsx>
      {`
        .img {
          width: 100vw;
          height: 100vh;
          background: url("/static/images/img.jpg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
        }
      `}
    </style>
  </div>
);
const Home = () => (
  <div>
    <Layout content={<Content />} />
  </div>
);
export default Home;

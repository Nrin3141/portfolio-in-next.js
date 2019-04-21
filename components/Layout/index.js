import Menu from "../Menu";
import Head from "../Headers";
import Social from "../Social";
import Parallax from "../Parallax";

const Layout = props => (
  <div>
    <Head />
    <Menu />
    {props.parallax ? <Parallax content={props.content} /> : props.content}
    <Social />
    <style jsx>{``}</style>
  </div>
);
export default Layout;

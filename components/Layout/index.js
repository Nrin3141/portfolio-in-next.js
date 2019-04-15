import Menu from "../Menu";
import Head from "../Headers";
import Footer from "../Footer";
import Parallax from "../Parallax";

const Layout = props => (
  <div>
    <Head />
    <Menu />
    {props.content}
    <Footer />
    <style jsx>{``}</style>
  </div>
);
export default Layout;

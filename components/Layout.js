import Navbar from "./Navbar";

function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <footer>Footer</footer>
    </>
  );
}

export default Layout;

import NavigationBar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};

export default Layout;

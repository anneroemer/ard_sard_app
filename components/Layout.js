import Navigation from "./Navigation";

const Layout = ({ children }) => {
    return (
        <>
        <div className="content">{ children }</div>
        <Navigation />
        </>
      );
}
 
export default Layout;
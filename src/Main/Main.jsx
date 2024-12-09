import { Outlet } from "react-router";
import Nav from "../Navbar/Nav";

const Main = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
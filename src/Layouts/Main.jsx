import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import NavbarPhone from "../Header/NavbarPhone";


const Main = () => {
    return (
        <div className="font-Poppins  items-center mx-auto">
            <Navbar />
            <NavbarPhone/>
            <Outlet />
        </div>
    );
};

export default Main;

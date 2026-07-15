import { useEffect, useState } from "react";
import TopNav from "./TopNav";
import MainNav from "./MainNav";

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setSticky(window.scrollY > 120);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <div className={sticky ? "navs_container sticky" : "navs_container"}>

            <TopNav />
            <MainNav />

        </div>

    );

};

export default Navbar;
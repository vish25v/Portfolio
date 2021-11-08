import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <header className="nav-bar">
            <div className="container mx-auto flex justify-between">
                <nav className="flex ">
                    <NavLink 
                        to="/" 
                        exact
                        activeClassName="active"
                        className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-yellow-100 text-4xl font-bold cursive tracking-widest"
                    >
                       Vish 
                    </NavLink>
                    <NavLink
                        to="/post"
                        activeClassName="active"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-yellow-100"
                     >
                        Blog Posts
                    </NavLink>
                    <NavLink 
                        to="/project" 
                        activeClassName="active"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-yellow-100">
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        activeClassName="active"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-yellow-100">
                        About Me!
                    </NavLink>
                </nav>
                <div>

                </div>
            </div>
        </header>
    )
}
export default NavBar;
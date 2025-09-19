"use client"
import ThemeControl from "./Theme-Control";

export default function Navbar() {
    return (
        <div
            className="navbar fixed top-5 left-0 z-50 backdrop-blur shadow-sm rounded-full md:w-[95%] md:mx-5 xl:w-[80%] xl:mx-35 w-[95%] mx-2 px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box gap-2 z-1 mt-3 w-52 p-2 shadow">
                        <li><a href={'#about'}>About</a></li>
                        <li><a href={'#skills'}>Skills</a></li>
                        <li><a href={'#projects'}>Projects</a></li>
                        <li><a href={'#experiences'}>Experiences</a></li>
                        <li><a href={'#contact'}>Contact Me</a></li>
                    </ul>
                </div>
                <h1 className="text-2xl ml-2 hidden lg:flex">Tamasru&nbsp;Pain</h1>
            </div>
            <div className={'navbar-center '}>
                <h1 className="text-2xl ml-2 flex lg:hidden">Tamasru&nbsp;Pain</h1>
            </div>

            <div className="navbar-end hidden lg:flex gap-2">
                <ThemeControl/>
                <ul className="menu menu-horizontal px-1">
                    <li><a href={'#about'}>About</a></li>
                    <li><a href={'#skills'}>Skills</a></li>
                    <li><a href={'#projects'}>Projects</a></li>
                    <li><a href={'#experiences'}>Experiences</a></li>
                </ul>
                <a className="btn btn-soft navbar-btn" href={'#contact'}>Contact Me</a>
            </div>
            <div className={'navbar-end flex lg:hidden'}>
                <ThemeControl/>
            </div>


        </div>
    )
}
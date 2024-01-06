import { useState } from 'react';
import "./navbar.scss";



/*----------Navbar component----------*/
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    //return jsx
    return (
        <div className="navbar-container mt-4">
            <h2 className='companyName'>pti.</h2>

            <div className="searchAndDropDown">
                <div className="form-outline" data-mdb-input-init>
                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#F99F16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input type="search" id="form1" className="form-control" placeholder="Search Audiobook" aria-label="Search" />
                </div>

                <div className="dropdown">
                    <div
                        className="btn"
                    >
                        MENU
                    </div>
                    <div className={`dropdown-menu ${isOpen ? 'show' : ''} mt-5`}>
                        <a className="dropdown-item" href="#">
                            Home
                        </a>
                        <a className="dropdown-item" href="#">
                            Details
                        </a>
                        <a className="dropdown-item" href="#">
                            Category
                        </a>
                        <a className="dropdown-item" href="#">
                            My Favourites
                        </a>
                        <a className="dropdown-item" href="#">
                            Profile
                        </a>
                        <a className="dropdown-item" href="#">
                            Log In/Sign Up
                        </a>

                    </div>
                    <div className="dropdownBtn" onClick={toggleDropdown}>
                        <svg width="25px" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 10L12 15L17 10" stroke="#F99F16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="account">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
};

export default Navbar;

import React, { useState } from 'react';
import './style.scss';
import { BsSearch } from 'react-icons/bs';
import { RiShoppingBagLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const [search, setSearch] = useState(true);
    const [nav, setNav] = useState(false);
    return (
        <div id='header'>
            <div className='container'>
                <div className='header'>
                    <div className='header--title'>
                        <a className="a"
                          href="">Bookshop</a>
                        <div className={nav ? 'header--nav active' : 'header--nav'}>
                            <a href="#genres">Categories</a>
                            <a href="#books">Recent</a>
                            <a href="#newBooks">Books</a>
                            <a href="#aboutUs">About Us</a>
                        </div>
                    </div>
                    <nav className='header--search'>
                        <div
                            style={{
                                background: search ? 'transparent' : '',
                                marginTop: -4,
                            }}
                            className='header--search__icon'
                        >
                            <BsSearch
                                onClick={() => setSearch(!search)}
                                className='header--search__icon--bs'
                            />

                            <input
                                style={{
                                    width: search ? '' : '120px',
                                }}
                                text='text'
                            />
                        </div>
                        <NavLink to={"/DetailBooks/:id"}>
                            <RiShoppingBagLine className='header--title__bag' />
                        </NavLink>
                    </nav>
                    <div onClick={() => setNav(!nav)} className='mobile_btn'>
                        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25   } />}
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Header;

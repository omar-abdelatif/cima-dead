import React from 'react';
import Link from 'next/link';
import { NavLink } from '../NavLink'
function MainNav() {
    return (
        <nav className="navbar justify-content-evenly navbar-expand-lg blue-sky padding" dir='rtl'>
            <div className="container">
                <button className="btn btn-primary menu-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvashrefpLabel">Menu</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" href="/">الرئيسية</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link" href="/movies" id="navbarDropdown" role="buthrefn" data-bs-hrefggle="dropdown" aria-expanded="false">
                                    أفلام
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="/">أفلام عربي</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">أفلام أجنبي</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">أفلام أنيميشن</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">أفلام أسيوية</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">أفلام هندية</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">أفلام تركية</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">أفلام وثائقية</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link" href="/series" id="navbarDropdown" role="buthrefn" data-bs-hrefggle="dropdown" aria-expanded="false">
                                    مسلسلات
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="/">مسلسلات عربية</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">مسلسلات أجنبية</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">مسلسلات أنمي</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">مسلسلات كورية</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">مسلسلات هندية</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">مسلسلات تركية</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">مسلسلات مدبلجة</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link" href="/ramadan" id="navbarDropdown" role="buthrefn" data-bs-hrefggle="dropdown" aria-expanded="false">
                                    مسلسلات رمضان
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="/">رمضان 2022</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">رمضان 2021</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">رمضان 2020</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link" href="/others" id="navbarDropdown" role="buthrefn" data-bs-hrefggle="dropdown" aria-expanded="false">
                                    أخرى
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="/">الأول</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">الثاني</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">الثالث</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="register">
                    <Link href="/">
                        <a href="" className="btn btn-primary">تسجيل</a>
                    </Link>
                    <Link href="/">
                        <a href="" className="btn btn-primary">تسجيل حساب</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
export default MainNav
import React from 'react';
import Link from 'next/link'
function LogoNav() {
    return (
        <nav className="navbar logo-nav" dir='rtl'>
            <div className="container">
                <div className="title">
                    <Link href="/">
                        <a className="navbar-brand cima">سيما</a>
                    </Link>
                    <Link href="/">
                        <a className="navbar-brand dead">ديد</a>
                    </Link>
                </div>
                <div className="search">
                    <form className="d-flex">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </div>
        </nav>
    )
}
export default LogoNav
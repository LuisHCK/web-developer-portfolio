import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Profile } from '../../data'

function NavBar() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const toggleMenu = () => setMenuIsOpen((prev) => !prev)

    const navbarMenuClassNames = ['navbar-menu', menuIsOpen ? 'open' : 'closed'].join(' ')

    return (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link href="/" passHref>
                    <a className="navbar-item has-text-weight-bold" aria-label={Profile.name}>
                        <Image src="/images/logo.png" height={28} width={28} />
                    </a>
                </Link>

                <a
                    role="button"
                    className="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarMenu"
                    onClick={toggleMenu}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarMenu" className={navbarMenuClassNames}>
                <div className="navbar-start">
                    <Link href="/" passHref>
                        <a className="navbar-item">Home</a>
                    </Link>

                    <Link href="/projects" passHref>
                        <a className="navbar-item">Projects</a>
                    </Link>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Hire</a>

                        <div className="navbar-dropdown">
                            <Link href="/hire-full-time" passHref>
                                <a className="navbar-item">Full time</a>
                            </Link>

                            <Link href="/hire-for-a-project" passHref>
                                <a className="navbar-item">Build a project</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

NavBar.propTypes = {}

export default NavBar

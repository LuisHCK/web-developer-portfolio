import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GitBranchOutline } from 'react-ionicons'


function NavBar(props) {
    return (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link href="/" passHref>
                    <a className="navbar-item has-text-weight-bold">
                        <Image src="/images/avatar.png" height={28} width={28} />
                        <span className="ml-2 is-size-4">AWDP</span>
                    </a>
                </Link>

                <a
                    role="button"
                    className="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
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

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <Link href="https://github.com" passHref>
                            <a className="button is-light" target="_blank">
                                <GitBranchOutline height="22px" />
                                Fork me!
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

NavBar.propTypes = {}

export default NavBar

import React from 'react'
import NavBar from '../../components/navbar'

function ProjectLayout(props) {
    const { children } = props

    return (
        <main className="MainLayout" {...props}>
            <NavBar />
            <div className="container is-max-desktop p-5">
                <article className="box">{children}</article>
            </div>
        </main>
    )
}

export default ProjectLayout

import React from 'react'
import NavBar from '../../components/navbar'

function ProjectLayout(props) {
    const { children } = props

    return (
        <main className="MainLayout" {...props}>
            <NavBar />
            <div className="container pt-5 pb-5">
                <article className="box">{children}</article>
            </div>
        </main>
    )
}

export default ProjectLayout

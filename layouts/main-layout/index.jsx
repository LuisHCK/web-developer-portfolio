import React from 'react'
import NavBar from '../../components/navbar'

function MainLayout(props) {
    const { children } = props

    return (
        <main className="MainLayout" {...props}>
            <NavBar />
            {children}
        </main>
    )
}

export default MainLayout

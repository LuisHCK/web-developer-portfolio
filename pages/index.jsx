import React from 'react'
import Head from 'next/head'
import ProfileBox from '../components/profile-box'
import MainLayout from '../layouts/main-layout'
import AboutMeBox from '../components/about-me-box'
import ProjectsBox from '../components/projects-box'

const Home = () => {
    return (
        <MainLayout className="HomePage">
            <Head>
                <title>Jhon Doe | Awesome Web Developer Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <div className="columns is-mobile is-multiline">
                    <div className="column is-one-third-desktop is-full-mobile HomePage-profileColumn">
                        <ProfileBox />
                    </div>
                    <div className="column HomePage-scrollContainer">
                        <div className="HomePage-scrollArea">
                            <AboutMeBox callToAction={{label: 'Read more'}} />

                            <ProjectsBox />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Home

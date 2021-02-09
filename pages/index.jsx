import React from 'react'
import Head from 'next/head'
import ProfileBox from '../components/profile-box'
import MainLayout from '../layouts/main-layout'
import AboutMeBox from '../components/about-me-box'
import ProjectsBox from '../components/projects-box'
import WorkExperience from '../components/work-experience'
import { Profile, Projects, WorkExp } from '../data'
import SEO from '../components/seo'

const Home = () => {
    return (
        <MainLayout className="HomePage">
            <SEO title={`${Profile.name} | ${Profile.title}`} description={Profile.short_desc} />
            <div className="container">
                <div className="columns is-mobile is-multiline">
                    <div className="column is-one-third-desktop is-full-mobile HomePage-profileColumn">
                        <ProfileBox
                            name={Profile.name}
                            avatar={Profile.photo}
                            role={Profile.title}
                            email={Profile.email}
                            country={Profile.location}
                            skills={Profile.skils}
                        />
                    </div>
                    <div className="column HomePage-scrollContainer">
                        <div className="HomePage-scrollArea">
                            <AboutMeBox description={Profile.about} />

                            <ProjectsBox projects={Projects} />

                            <WorkExperience jobs={WorkExp} />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Home

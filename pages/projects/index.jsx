import React from 'react'
import ProjectCard from '../../components/project-card'
import SEO from '../../components/seo'
import { Profile, Projects } from '../../data'
import MainLayout from '../../layouts/main-layout'

function ProjectsPage() {
    const renderProjects = () =>
        Projects.map((project, index) => (
            <div className="column is-half-desktop is-full-mobile" key={'project-column-' + index}>
                <ProjectCard
                    name={project.name}
                    description={project.description}
                    stack={project.stack}
                    image={project.cover}
                    links={project.links}
                />
            </div>
        ))

    return (
        <MainLayout className="ProjectsPage">
            <SEO
                title={`${Profile.name} | Projects`}
                description="Check out these great projects that I have developed"
            />
            <div className="container pt-5 pb-5">
                <div className="box">
                    <h1 className="title">Projects 🚀</h1>
                    <div className="columns is-mobile is-multiline">
                        {renderProjects()}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default ProjectsPage

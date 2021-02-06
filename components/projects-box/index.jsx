import React from 'react'
import PropTypes from 'prop-types'
import ProjectCard from '../project-card'

function ProjectsBox(props) {
    const { title, description, projects } = props

    const renderProjects = () =>
        projects?.map((project, index) => (
            <div className="column is-half-desktop is-full-mobile" key={'project-' + index}>
                <ProjectCard />
            </div>
        ))

    return (
        <section className="box">
            <h3 className="is-size-3 has-text-weight-bold">{title}</h3>
            <p>{description}</p>

            <div className="columns is-mobile is-multiline mt-3">
                {renderProjects()}
            </div>
        </section>
    )
}

ProjectsBox.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    projects: PropTypes.array,
}

ProjectsBox.defaultProps = {
    title: 'Projects I have worked on 👨‍💻',
    description: `Check out these great projects that I have developed`,
    projects: Array(4).fill({}),
}

export default ProjectsBox

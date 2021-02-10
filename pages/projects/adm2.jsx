import React, { useEffect, useState } from 'react'
import ProjectLayout from '../../layouts/project-layout'
import SEO from '../../components/seo'
import { getProjectBySlug, Profile } from '../../data'
import { getProjectContent } from '../../utils'

const SLUG = 'adm2'

function MarvelousProject() {
    const project = getProjectBySlug(SLUG)
    const [content, setContent] = useState('')

    useEffect(() => {
        const getContent = async () => {
            setContent(await getProjectContent(project.content))
        }

        getContent()
    }, [])

    return (
        <ProjectLayout className="ProjectPage">
            <SEO title={`${Profile.name} | ${project.name}`} description={project.description} />
            {content}
        </ProjectLayout>
    )
}

export default MarvelousProject

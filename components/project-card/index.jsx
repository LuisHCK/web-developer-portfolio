import React from 'react'
import PropTypes from 'prop-types'
import DevIcon, { REACT } from '../dev-icon'
import Link from 'next/link'
import parse from 'html-react-parser'

function ProjectCard(props) {
    const { name, description, image, stack, links } = props

    const renderStack = () =>
        stack.map((name, index) => (
            <DevIcon name={name} key={'tech-icon-' + index} width="22px" height="22px" />
        ))

    const renderLinks = () =>
        links.map((link, index) => (
            <div className="card-footer-item" key={'project-link-' + index}>
                <Link href={link.url} passHref>
                    <a className="has-text-centered" target={link.target} rel={link.rel}>
                        {link.label}
                    </a>
                </Link>
            </div>
        ))

    return (
        <div className="ProjectCard card">
            <div className="card-image">
                <figure className="image is-16by9">
                    <img className="adjusted-image" src={image} alt={name} />
                </figure>
            </div>

            <div className="card-content">
                <div className="is-flex is-justify-content-space-between">
                    <h4 className="has-text-weight-bold">{name}</h4>

                    <div>{renderStack()}</div>
                </div>

                <div className="content">{parse(description || '')}</div>
            </div>

            <footer className="card-footer">{renderLinks()}</footer>
        </div>
    )
}

ProjectCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            url: PropTypes.string,
            target: PropTypes.string,
        })
    ),
}

ProjectCard.defaultProps = {
    name: 'Demo project',
    description: 'Lorem ipsum dolor sit amet',
    image: 'https://picsum.photos/600',
    stack: [REACT],
    links: [
        { label: 'Read more', url: '/projects/1' },
        { label: 'View on GitHub', url: 'https://github.com', target: '_blank' },
    ],
}

export default ProjectCard

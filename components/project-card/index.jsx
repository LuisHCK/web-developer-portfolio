import React from 'react'
import PropTypes from 'prop-types'
import DevIcon, { JAVASCRIPT, REACT } from '../dev-icon'
import Link from 'next/link'

function ProjectCard(props) {
    const { name, description, image, stack } = props

    const renderStack = () =>
        stack.map((name, index) => <DevIcon name={name} key={'tech-icon-' + index} />)

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-3by2">
                    <img className="adjusted-image" src={image} alt={name} />
                </figure>
            </div>

            <div className="card-content">
                <h4 className="has-text-weight-bold">{name}</h4>

                <div className="content">
                    <p>{description}</p>
                </div>

                <div className="content is-flex is-align-items-center is-justify-content-center pt-2 pb-2">
                    {renderStack()}
                </div>
            </div>

            <footer className="card-footer">
                <p className="card-footer-item">
                    <Link href="https://github.com/luishck" passHref>
                        <a>View on GitHub</a>
                    </Link>
                </p>
            </footer>
        </div>
    )
}

ProjectCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.string),
}

ProjectCard.defaultProps = {
    name: 'Demo project',
    description: 'Lorem ipsum dolor sit amet',
    image: 'https://picsum.photos/600',
    stack: [REACT, JAVASCRIPT],
}

export default ProjectCard

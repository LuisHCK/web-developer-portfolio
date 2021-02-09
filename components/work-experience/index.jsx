import React from 'react'
import PropTypes from 'prop-types'
import TimeLine from '../timeline'

function WorkExperience(props) {
    const { title, jobs } = props

    return (
        <section className="box">
            <h3 className="is-size-3 has-text-weight-bold mb-4">{title}</h3>
            <TimeLine rows={jobs} />
        </section>
    )
}

WorkExperience.propTypes = {
    title: PropTypes.string,
}

WorkExperience.defaultProps = {
    title: 'My work experience 🐱‍👤',
    jobs: [],
}

export default WorkExperience

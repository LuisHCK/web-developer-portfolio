import React from 'react'
import PropTypes from 'prop-types'

function Row(props) {
    const { title, subtitle, date, location } = props

    return (
        <div className="Timeline-row">
            <div className="Timeline-rowContainer">
                <div className="Timeline-rowContent">
                    <h4 className="has-text-weight-bold is-size-5">{title}</h4>
                    <p className="is-size-7">{subtitle}</p>
                    <p className="is-size-7 has-text-grey-lighter">{date}</p>
                    <p className="is-size-7 has-text-grey-lighter">{location}</p>
                </div>
            </div>
        </div>
    )
}

Row.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.string,
}

export default Row

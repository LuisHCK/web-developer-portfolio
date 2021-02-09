import React from 'react'
import PropTypes from 'prop-types'
import Row from './row'

function TimeLine(props) {
    const { rows } = props

    const renderRows = () =>
        rows.map((row, index) => (
            <li key={'timeline-row-item' + index}>
                <Row
                    title={row.title}
                    subtitle={row.subtitle}
                    date={row.date}
                    location={row.location}
                />
            </li>
        ))

    return (
        <div className="Timeline">
            <ul>{renderRows()}</ul>
        </div>
    )
}

TimeLine.propTypes = {
    rows: PropTypes.array,
}

TimeLine.defaultProps = {
    rows: [],
}

export default TimeLine

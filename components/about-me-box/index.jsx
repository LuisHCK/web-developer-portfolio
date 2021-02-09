import React from 'react'
import PropTypes from 'prop-types'

function AboutMeBox(props) {
    const { title, description, callToAction } = props

    const renderCallToAction = () =>
        callToAction ? (
            <div className="AboutMeBox-callToAction mt-2">
                <button className="button is-primary" onClick={callToAction.action}>
                    {callToAction.icon ? callToAction.icon : null}
                    <span>{callToAction.label}</span>
                </button>
            </div>
        ) : null

    return (
        <section className="AboutMeBox box">
            <h3 className="is-size-3 has-text-weight-bold">{title}</h3>
            <p className="AboutMeBox-description">{description}</p>

            {renderCallToAction()}
        </section>
    )
}

AboutMeBox.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    callToAction: PropTypes.shape({
        label: PropTypes.string,
        icon: PropTypes.node,
        action: PropTypes.func,
    }),
}

AboutMeBox.defaultProps = {
    title: 'About me 😎',
    description: `A passionate Full Stack Software Developer 🚀
    having an experience of building Web and Mobile applications
    with JavaScript / Reactjs / Nodejs / React Native and some
    other cool libraries and frameworks.`,
}

export default AboutMeBox

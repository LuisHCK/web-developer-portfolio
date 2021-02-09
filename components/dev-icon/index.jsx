import React from 'react'
import PropTypes from 'prop-types'
import {
    LogoAndroid,
    LogoAngular,
    LogoApple,
    LogoJavascript,
    LogoNodejs,
    LogoPython,
    LogoReact,
    LogoVue,
} from 'react-ionicons'

function DevIcon(props) {
    const { name, color, height, width } = props

    switch (name) {
        case REACT:
            return <LogoReact color={color} height={height} width={width} />

        case VUE:
            return <LogoVue color={color} height={height} width={width} />

        case ANDROID:
            return <LogoAndroid color={color} height={height} width={width} />

        case JAVASCRIPT:
            return <LogoJavascript color={color} height={height} width={width} />

        case NODEJS:
            return <LogoNodejs color={color} height={height} width={width} />

        case ANGULAR:
            return <LogoAngular color={color} height={height} width={width} />

        case PYTHON:
            return <LogoPython color={color} height={height} width={width} />

        case APPLE:
            return <LogoApple color={color} height={height} width={width} />
        default:
            return <span></span>
    }
}

DevIcon.propTypes = {
    name: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string,
}

DevIcon.defaultProps = {
    height: '32px',
    width: '32px',
    color: 'white',
}

export default DevIcon

// Export icon names
export const REACT = 'react'
export const VUE = 'vue'
export const ANDROID = 'android'
export const JAVASCRIPT = 'javascript'
export const NODEJS = 'nodejs'
export const ANGULAR = 'angular'
export const APPLE = 'apple'
export const PYTHON = 'python'

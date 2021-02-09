import { useEffect, useState } from 'react'

/**
 * @typedef WindowSize
 * @property {Number|String} width - Windows inner width
 * @property {Number|String} height - Window inner height
 */

/**
 * This hook returns an object containing the window's width and height
 * @returns {WindowSize}
 */
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({ width: undefined, height: undefined })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight })
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize)
    }, [input])

    return windowSize
}

export default useWindowSize

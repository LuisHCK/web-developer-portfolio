import { ReactNode } from 'react'
import marked from 'marked'
import parse from 'html-react-parser'
import { markdownFetch } from '.'

/**
 * Fetch and parse markdown url to react component
 * @param {String} contentURL
 * @returns {ReactNode}
 */
const getProjectContent = async (contentURL) => {
    const markdownString = await markdownFetch(contentURL)
    const htmlContent = marked(markdownString || '')
    return parse(htmlContent || '')
}

export default getProjectContent

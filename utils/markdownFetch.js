/**
 * Fetch markdown file as blob
 * @param {String} url Markdown file
 * @returns {Promise<String>}
 */
const markdownFetch = (url) => {
    return fetch(url, { method: 'GET' }).then((response) => response.text())
}

export default markdownFetch

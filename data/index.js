import profile from './profile.yml'
import projects from './projects.yml'
import workExperience from './work-experience.yml'

/**
 * @typedef DevProfile
 * @type {Object}
 * @property {String} name - Fullname
 * @property {String} title - Developer title
 * @property {String} photo - Photo url
 * @property {String} about - About text
 * @property {String} short_desc - Short description
 * @property {Array<String>} skils - Skills list
 * @property {String} email - Contact email
 * @property {String} location - Current location
 */

/**
 * @type {DevProfile}
 */
export const Profile = profile

/**
 * @typedef ProjectLink
 * @property {String} label - Link label
 * @property {String} url - Project url
 * @property {String} target - Anchor target
 */

/**
 * @typedef DevProject
 * @property {String} name - Project name
 * @property {String} slug - Project slug
 * @property {String} description - Project description text
 * @property {Array<String>} stack - Stack of techologies
 * @property {String} content - Content Link
 * @property {String} cover - Cover URL
 * @property {Array<ProjectLink>} links -
 */

/**
 * @type {Array<DevProject>}
 */
export const Projects = projects

/**
 * @typedef WorkExperience
 * @property {String} title
 * @property {String} subtitle
 * @property {String} date
 * @property {String} location
 */

/**
 * @type {Array<WorkExperience>}
 */
export const WorkExp = workExperience

/**
 * Returns a project by it's Slug string
 * @param {String} slug - Project slug
 * @returns {DevProject}
 */
export const getProjectBySlug = (slug) => {
    const project = Projects.find((project) => project.slug === slug)
    return project || {}
}

/**
 * Convert normal string to slug
 * @param {String} name - Item name
 */
export const nameToSlug = (name = '') => {
    return name.toLowerCase().split(' ').join('-')
}

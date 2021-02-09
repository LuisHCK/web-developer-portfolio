import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'
import { AtOutline, LocationOutline } from 'react-ionicons'

function ProfileBox(props) {
    const { name, role, email, country, skills, avatar } = props

    const renderSkills = () =>
        skills.map((skill, index) => (
            <li key={'skill-' + index} className="ProfileBox-listItem">
                {skill}
            </li>
        ))

    return (
        <section className="box ProfileBox">
            <div className="ProfileBox-avatarContainer">
                <Image
                    src={avatar}
                    alt={`${name} | ${role}`}
                    className="ProfileBox-avatar"
                    width={200}
                    height={200}
                    objectFit="cover"
                    className="ProfileBox-avatar"
                />
            </div>

            <h1 className="ProfileBox-name is-size-2 has-text-weight-bold">{name}</h1>
            <h2 className="ProfileBox-role is-size-5">{role}</h2>

            <div className="ProfileBox-contact">
                <span className="has-text-weight-bold">Contact</span>
                <ul>
                    <li className="ProfileBox-listItem">
                        <AtOutline width="22px" color="white" />
                        <Link href={`mailto:${email}`} passHref>
                            <a target="_blank">{email}</a>
                        </Link>
                    </li>

                    <li className="ProfileBox-listItem">
                        <LocationOutline width="22px" color="white" />
                        <span>{country}</span>
                    </li>
                </ul>
            </div>

            <div className="ProfileBox-skills">
                <span className="has-text-weight-bold">Skills</span>
                <ul>{renderSkills()}</ul>
            </div>
        </section>
    )
}

ProfileBox.defaultProps = {
    name: 'Jhon Doe',
    role: 'Senior Web developer',
    email: 'jdoe@company.com',
    country: 'Hyrule Kingdom',
    skills: [
        'CI/CD',
        'Web development',
        'Mobile development',
        'SCRUM',
        'TDD',
        'Initiatives to hangout with the team',
        'Passion for teaching',
    ],
    avatar: '/images/avatar.png',
}

ProfileBox.propTypes = {
    name: PropTypes.string,
    role: PropTypes.string,
    email: PropTypes.string,
    country: PropTypes.string,
    skills: PropTypes.array,
    avatar: PropTypes.string,
}

export default ProfileBox

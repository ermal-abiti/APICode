const TeamMember = ({name, position, github, instagram, linkedin, twitter, align}) => {

    return (
<<<<<<< Updated upstream:client-app/src/components/TeamMember.js
        <div className={`member ${align === 'right' ? 'right' : ''}`}>
            <i class="far fa-user-circle"></i>
=======
        <div className={`member ${align == 'right' ? 'right' : ''}`}>
            <i className="far fa-user-circle"></i>
>>>>>>> Stashed changes:client-app/src/components2/TeamMember.js

            <div className="info">
                <h2>{ name }</h2>
                <p>{ position }</p>

                <div className="socials">
                    <a href={github}>
                        <i className="fab fa-github"></i>
                    </a>
                    <a href={instagram}>
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href={linkedin}>
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href={twitter}>
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TeamMember;
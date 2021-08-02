const TeamMember = ({name, position, github, instagram, linkedin, twitter, align}) => {

    return (
        <div className={`member ${align == 'right' ? 'right' : ''}`}>
            <i class="far fa-user-circle"></i>

            <div className="info">
                <h2>{ name }</h2>
                <p>{ position }</p>

                <div className="socials">
                    <a href={github}>
                        <i class="fab fa-github"></i>
                    </a>
                    <a href={instagram}>
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href={linkedin}>
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href={twitter}>
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TeamMember;
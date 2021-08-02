import TeamMember from "./TeamMember";
import FooterComponent from './FooterComponent';

const About = () => {
    return (
        <>
            <div className="about-main">
                <i class="fas fa-home"></i>

                <h1>
                    We help retainers sell the estate <br />
                    and people buy the right one.
                </h1>
            </div>

            <div className="team container">
                <h3>Meet our team</h3>

                <TeamMember name="Ermal Abiti" position="Co-founder/developer" />
                <TeamMember name="Iljas Neziri" position="Co-founder/developer" align="right" />
                <TeamMember name="Leon Berisha" position="UI designer/developer" />
                <TeamMember name="Eroll Uka" position="Founder/developer" align="right"/>
                <TeamMember name="Albion Babaj" position="Product Manager" />
                <TeamMember name="Albin Beqiri" position="Junior Developer" align="right"/>
            </div>

            {/* <div className="location">
                <h4>Location</h4>

                <p>[insert map here]</p>
            </div> */}

            <FooterComponent />
        </>
    )
}

export default About;
import { Link } from 'react-router-dom';

const FooterComponent = ({pos}) => {
    const footerPosition = pos;

    return (
        <footer className={footerPosition}>
            <div className="left">
                <div className="buttons">
                    <Link to="/register" className="button">SIGN UP</Link>
                    <br />
                    <Link to="/login" className="button">LOG IN</Link>
                </div>
                <ul className="links">
                    <li>
                        <a href="#">Privacy policy</a>
                    </li>
                    <li>
                        <a href="#">Terms</a>
                    </li>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <a href="#">Contact information</a>
                    </li>
                </ul>
            </div>
            <div className="center">
                <p>&copy; ESTATOR 2021. All Rights Reserved.</p>
            </div>
            <div className="right">
                <h2>Follow us</h2>
                <div className="icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent;
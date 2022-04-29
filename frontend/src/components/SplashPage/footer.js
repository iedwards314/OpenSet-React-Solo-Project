import linkedInLogo from "../../LinkedIn-Logos/LI-In-Bug.png";

const FooterFunc = () => {
    return (
        <footer className="splash-footer">
            <div className="disclaimer-container">
                <p className="disclaimer-text">*This site is for demo purposes only</p>
            </div>
            <div className="author-info">
                <p className="author-text">Created By: Ian Edwards</p>
                <p>
                    <a href="https://www.linkedin.com/in/edwards-ian/">
                        <img className="linkedIn-logo" src={`${linkedInLogo}`}></img>
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default FooterFunc;

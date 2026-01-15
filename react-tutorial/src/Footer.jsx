import Social from "./Social.jsx";

export default function Footer({ links }){
    return (
        <footer className="footer">
            <div className="footer-top">
                {
                    links.map((link, index) => < Social key = {index} link = {link} />)
                }
            </div>
            <div className="footer-bottom">
                <p>No rights reserved</p>
            </div>
        </footer>
    );
}
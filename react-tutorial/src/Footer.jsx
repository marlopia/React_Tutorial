import Social from "./Social.jsx";

export default function Footer({ links }){
    return (
        <footer className="footer">
            <div className="footer-top">
                {
                    links.map(link => < Social link = {link} />)
                }
            </div>
            <div className="footer-bottom">
                <p>Some Text</p>
            </div>
        </footer>
    );
}
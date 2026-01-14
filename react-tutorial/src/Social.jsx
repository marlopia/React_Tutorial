export default function Social({ link }){
    return(
        <a className="social-card" href={link.href} target="_blank" rel="noopener noreferrer">
            <img alt={link.alt} src={link.src}></img>
        </a>
    );
}
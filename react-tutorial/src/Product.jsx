import Counter from "./Counter.jsx";

export default function Product(props) {
    return (
        <div className="product">
            <img className="product-image" width="272" height="300" alt={props.name} src={props.imgLink} />
            <p className="product-name">{props.name}</p>
            <div className="product-price">{props.price+"€"}</div>
            < Counter/>
        </div>
    );
}

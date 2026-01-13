export default function Product(props) {
    return (
        <div class="product">
            <img class="product-image" width="272" height="300" alt={props.name} src={props.imgLink} />
            <p class="product-name">{props.name}</p>
            <div class="product-price">{props.price+"€"}</div>
        </div>
    );
}

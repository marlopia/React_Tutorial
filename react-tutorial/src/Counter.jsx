import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : count);
    return(
        <div className="counter">
            <button onClick={decrement} className="counter-btn">-</button>
            <p className="counter-nmb">{count}</p>
            <button onClick={increment} className="counter-btn">+</button>
        </div>
    );
}
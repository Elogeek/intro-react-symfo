import {useEffect, useState} from "react";

export const Counter = function ({factor}) {

    const [count, setCount] = useState(0);

    return(
        <div className="counter">
            <button onClick={ () => setCount(count + 1)}>Incrémenter</button>
            <p>
                <span>{count}</span>
            </p>
        </div>
    );
};
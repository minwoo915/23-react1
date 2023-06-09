import React, { useState } from "react";

function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    // const increaseCount = () => setCount((count) => count + 1);
    // const decreaseCount = () => setCount((count) => Math.max(count -1, 0));

    const apple = () => setCount((count) => "사과");
    const orange = () => setCount((count) => "오렌지");
    const banana = () => setCount((count) => "바나나");

    return [count, apple, orange, banana];
}

export default useCounter;
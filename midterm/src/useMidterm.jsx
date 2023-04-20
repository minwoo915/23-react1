import React, { useState } from "react";

function useMidterm(initialValue) {
    const [count, setCount] = useState(initialValue);

    const apple = () => setCount((count) => "사과");
    const orange = () => setCount((count) => "오렌지");
    const banana = () => setCount((count) => "바나나");

    return [count, apple, orange, banana];
}

export default useMidterm;
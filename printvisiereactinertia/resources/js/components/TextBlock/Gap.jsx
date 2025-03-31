import React from "react";

const Gap = ({ height }) => {
    const gapHeight = typeof height === "number" ? `${height}px` : height;

    return <div style={{ height: gapHeight }}></div>;
};

export default Gap;

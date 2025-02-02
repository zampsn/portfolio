import React from "react";

const CanvasOverlay = ({children}: { children: React.ReactNode }) => {
    return (<div className="pointer-events-none">{children}</div>)
};

export default CanvasOverlay;
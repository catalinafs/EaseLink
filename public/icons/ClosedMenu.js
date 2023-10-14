import * as React from "react";
const ClosedMenu = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width || 30}
        height={props.height || 30}
        style={{
            fill: props.fill || '#fff',
        }}
        {...props}
    >
        <path d="M7 4a.995.995 0 0 0-.707.293l-2 2a.999.999 0 0 0 0 1.414L11.586 15l-7.293 7.293a.999.999 0 0 0 0 1.414l2 2a.999.999 0 0 0 1.414 0L15 18.414l7.293 7.293a.999.999 0 0 0 1.414 0l2-2a.999.999 0 0 0 0-1.414L18.414 15l7.293-7.293a.999.999 0 0 0 0-1.414l-2-2a.999.999 0 0 0-1.414 0L15 11.586 7.707 4.293A.996.996 0 0 0 7 4z" />
    </svg>
);
export default ClosedMenu;

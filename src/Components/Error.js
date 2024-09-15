import {useRouteError} from "react-router-dom";
import React from "react";
const Error=()=>{
    const err=useRouteError();
    return (
        <div>
            <h3>
                Oops Something Went Wrong;
            </h3>
            <h2>
                {err.status}
            </h2>
        </div>
    )
}

export default Error;
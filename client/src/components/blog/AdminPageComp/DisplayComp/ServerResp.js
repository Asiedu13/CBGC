import React from 'react';

function ServerResp(props) {
    return (
        <div className="serverResp">
            <h2>New Message!</h2>
            <p>{props.msg}</p>
        </div>
    )
}

export default ServerResp;
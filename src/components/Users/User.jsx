import React from 'react';

const User = (props) => {
    return (
        <div>
            <div id={props.id}> {props.name}</div>
        </div>
    );
};

export default User;
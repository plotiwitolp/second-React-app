import React from 'react';
import User from './User';

const Users = (props) => {



    const usersElements = props.state.users.map(el =>  <User {...el} key={el.id}/>)

    return (
        <div>
            {usersElements}
        </div>
    );
};

export default Users;
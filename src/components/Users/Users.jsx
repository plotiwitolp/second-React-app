import React from 'react';
import User from './User';
import StoreContext from '../../StoreContext';

const Users = (props) => {

    return (
        <StoreContext>
            {store=>{

            const usersElements = store.getState().usersData.users.map(el =>  <User {...el} key={el.id}/>)
            return(
                <div>{usersElements}</div>
            )
        }}
        </StoreContext>

    );
}
export default Users;
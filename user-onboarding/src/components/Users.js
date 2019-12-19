import React, { useState } from "react";

const Users = props => {
    if (props.length > 1){
        console.log('were gettign somewhere')
        return (<div>
<h1>{props.name}</h1>
<p>{props.email}</p>
<p>{props.password}</p>
</div>)
    }
    else return <div>i exist lucas i swear</div>

}

export default Users;
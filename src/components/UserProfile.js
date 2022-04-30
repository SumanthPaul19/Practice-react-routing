import React from 'react';
import {useParams} from 'react-router-dom'


export default function UserProfile(){
    let url=useParams();

    return(
        <div>
            <h1 className="text-center text-info">Welcome,{url.username}</h1>
        </div>
    )
}
import React from 'react'
import getUsers from "../../../../services/getUsers"

export default async function page(props) {
    const getUserList =  getUsers()
    const users = await getUserList;
    const currentid = props.params.userid;
    const userData = users[currentid-1];
    console.log('====================================');
    console.log(userData);
    console.log('====================================');
  return (
    <div>
        <h1>user detail secrren</h1>
        <h1>user id: {userData.id}</h1>
        <h1>your name: {userData.name}</h1>
        <h1>your user name: {userData.username}</h1>
        <h1>your mail id: {userData. email}</h1>
    </div>
    
  )
}

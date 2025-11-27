import React from 'react';
import { Button, Flex } from 'antd';
import { useContext } from 'react';
import User from '../context/Context';
const AppButton = ({title}) =>{ 
    const {user, setUser} = useContext(User)
    console.log(user)
    // console.log("user", user)
    return (
 
    <Button type="primary" onClick={()=> {setUser({name: "maham", email: "maham@gmail.com"})}}>{title}</Button>
    

)
};
export default AppButton;
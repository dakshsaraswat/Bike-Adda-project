import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import BASE_URL from './helper';

const About = ()=>{
    let user;
    const navigate = useNavigate();

    const findingUser = async()=>{
        user = await fetch(`${BASE_URL}/authenticate`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            credentials:"include"
        });


        console.log(user);
        if(!user){
            navigate.push('/login');
        }
    }

    useEffect(()=>{
          findingUser();
          console.log(user);
    },[])

    return(
       <h1>HI USER</h1>
    );
}

export default About; 
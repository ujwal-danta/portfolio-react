import React from 'react'
import uuid from 'react-uuid'
export const navbar = [
    {
        id : uuid(),
        title : 'Home',
        url : '/',
        classname: 'orange'
    },
    // {
    //     id : uuid(),
    //     title : 'About Me',
    //     url : '/about-me',
    //     classname: 'white'
    // },
    {
        id : uuid(),
        title : 'Projects',
        url : '/projects',
        classname: 'white'
    },
    {
        id : uuid(),
        title : 'Contact Me',
        url : '/contact-me',
        classname: 'green'
    }
]
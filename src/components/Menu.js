import React, { useState } from 'react'
import {navbar} from '../data/navbar'
import { BrowserRouter,Switch,Route,Link } from 'react-router-dom';
const Menu = () => {
    const [links,setLinks] = useState(navbar);
    
    return (
        <section className="navbar">
         <ul>
             {
                 links.map(({id,title,url,classname})=>{
                     return (
                         <li key={id} className={classname}>
                         <Link to={url}>{title}</Link>
                         </li>
                     )
                 })
             }
        </ul>   
        </section>
    )
}

export default Menu

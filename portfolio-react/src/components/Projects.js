import {useState} from 'react'
import {projects} from '../data/projects'
const Projects = () => {
    //eslint-disable-next-line
    const [cards,setCards]= useState(projects)
    return (
        <>
        <section className="projects">
        <h1>Projects page</h1>  
        <div className="cards">
           {cards.map(({id,title,desc,github,image})=>(
              <article key={id}>
              <img src={image} alt={title} />
              <h4>{title}</h4>
              <p>{desc}</p>
              <ul>
                  <li>
                      <a href={github} target="_blank" rel="noopenner norefferer">github</a>
                  </li>
                  <li>
                      <a href={github} target="_blank" rel="noopenner norefferer">demo</a>
                  </li>
              </ul>
              </article> 
           ))} 
        </div> 
        </section>
        </>
    )
}

export default Projects

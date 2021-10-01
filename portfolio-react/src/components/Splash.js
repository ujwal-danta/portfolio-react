import React from 'react'
import { useEffect } from 'react'
const Splash = () => {
    useEffect(() => {
        let intro = document.querySelector('.intro');
        let logo = document.querySelector('logo-header');
        let logoSpan = document.querySelectorAll('.logo');
        setTimeout(()=>{
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.add('active');
    
                }, (idx + 1) * 400)
         });
         setTimeout(()=>{
             logoSpan.forEach((span,idx)=>{

                
                     setTimeout(()=>{
                         span.classList.remove('active');
                         span.classList.add('fade');
                     },(idx+1)*50)
                 
             })
         },2000)

        setTimeout(()=>{
            intro.style.top = '-100vh'
        },2300)

        })
       
    }, [])
    return (
        <>
            <div className="intro">
                <h1 className="logo-header">
                    <span className="logo">Hi ! i am</span><br /><span className="logo"> Ujwal Danta</span>
                </h1>
            </div>
            <header>
                <h4>Portfolio</h4>
            </header>
        </>
    )
}

export default Splash

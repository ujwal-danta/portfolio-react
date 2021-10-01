import {React,useState} from 'react'
const Contact = () => {
    const [userData,setUserData] = useState({
        username : "",
        email : "",
        phone : "",
        message : ""
    });
    let name , value;
    const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({...userData , [name] : value});
    }


    const submitData = async (event) => {
        event.preventDefault();
        const {username,email,phone,message} = userData;
        if(username && email && phone && message){
        const res = await fetch(
            'https://contact-form-portfolio-46c0f-default-rtdb.firebaseio.com/userDataRecords.json',{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify({
                    username,email,phone,message,
                }),
            }
            );

    if(res){
        alert("Thank you for filling the form . Will reply soon 🤗");
        setUserData({
        username : "",
        email : "",
        phone : "",
        message : ""
        })
    }
    else{
        alert("ERROR!❌❌ Please refill the form");
    }
}
else{
    alert("Please fill all the fields before submitting 🤗")
}        
    };


    return (
        <>
           <div className="container">
               <div className="contact-box">
                   <div className="left"></div>
                   <div className="right">
                       <h2>Contact Us</h2>
                       <input type="text" className="field" name="username"  value={userData.username} onChange={postUserData} placeholder="Your Name" />
                       <input type="email" className="field" name="email"  value={userData.email} onChange={postUserData} placeholder="Your Email" />
                       <input type="text"  className="field" name="phone"  value={userData.phone} onChange={postUserData} placeholder="Your Phone"/>
                       <textarea className="field" name="message"  value={userData.message} onChange={postUserData} placeholder="Message"></textarea>
                       <button className="btn" onClick={submitData}>Send</button>
                   </div>
               </div>
           </div>
        </>
    )
}

export default Contact

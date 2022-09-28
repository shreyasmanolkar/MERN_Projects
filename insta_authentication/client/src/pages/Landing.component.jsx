import React from "react";
import "./Landing.styles.css";

function Landing(){

    // const response = fetch('http://localhost:5000/api/posts', {
    //     method: "GET",
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }
    // });

    return(
        <div>
            <h1>Instagram</h1>
            <p>Landing</p>
            {/* {
                console.log(typeof(response))
                // response.map((d, index)=>{
                //     return (<li key={index}>{d.username}</li>)
                // })
            } */}
        </div>
    )
}

export default Landing;
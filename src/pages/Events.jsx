import React, { useEffect } from "react";
import axios from 'axios';


const Events = () => {
    useEffect(() => {
        const getEvent = async () => {
            try {
                const response = await axios.get(`http://localhost:5005/api/events`);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getEvent();
        
    }, []);

    return (
        <div>
            <h1>Events</h1>
        </div>
    );
};

export default Events;




// // const axios = require("axios");

// const API_KEY = "7UKASZVHNCGMSFL3N73R";

// const searchTerm = "Berlin";


// const getEvent = event => {
//     axios
//         .get("https://www.eventbriteapi.com/v3/events/?7UKASZVHNCGMSFL3N73R")
//         .then(function (response) {
//             console.log(response);
//         });
// }
// getEvent();


// function Events (){
//     return (
//         <div>
//             <h1>Events</h1>

//         </div>

//     )
    
// }

// export default Events;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";


function SignupPage(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [userType, setUserType] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName(e.target.value);


    const handleSignupSubmit = (e) => {
        e.preventDefault();
        // Create an object representing the request body
        const requestBody = { email, password, name, userType };

        // Make an axios request to the API
        // If the POST request is a successful redirect to the login page
        // If the request resolves with an error, set the error message in the state
        console.log("Request Body:", requestBody);

        axios.post(`${API_URL}/auth/signup`, requestBody)
            .then((response) => {
                console.log("Response:", response);
                navigate('/login');
            })
            // .catch((error) => {
            //     console.log(error)
            //     console.log(error.response);

            //     const errorDescription = error.response.data.message;
            //     setErrorMessage(errorDescription);
            // })
            .catch((error) => {
                console.log("Error:", error);

                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    const errorDescription = error.response.data?.message || "An error occurred";
                    setErrorMessage(errorDescription);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
            });



    };

    const handleUserType = (e) => {
        setUserType(e.target.value);
    };
    console.log(userType)

    return (
        <div className="SignupPage">
            <h1>Sign Up</h1>

            <form onSubmit={handleSignupSubmit}>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmail}
                />

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePassword}
                />

                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleName}
                />
                <input
                    type="radio"
                    id="awarenessPartner"
                    name="userType"
                    value="Awareness"
                    onChange={handleUserType}
                />
                <label htmlFor="awarenessPartner">Awareness Partner</label>

                <br />
                <input
                    type="radio"
                    id="partyEvent"
                    name="userType"
                    value="Event"
                    onChange={handleUserType}
                />
                <label htmlFor="partyEvent">Party Event</label>
                <br />

                <button type="submit">Sign Up</button>
            </form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p>Already have account?</p>
            <Link to={"/login"}> Login</Link>
        </div>
    )
}

export default SignupPage;

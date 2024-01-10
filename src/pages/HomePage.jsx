

// src/components/HomePage.jsx

import React, { useContext } from "react";
import IsPrivate from "../components/IsPrivate";
import { AuthContext } from "../context/auth.context";

function HomePage() {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <IsPrivate>
            {/*
                Render content based on the user's authentication status.
                Show different h1 for logged in and non-logged in users.
            */}
            <div>
                {isLoggedIn ? (
                    <h1>Welcome, User!</h1>
                ) : (
                    <div>
                        <h1>Home Page</h1>
                        <p>Please log in to see personalized content.</p>
                    </div>
                )}
            </div>
        </IsPrivate>
    );
}

export default HomePage;

import React, { useState } from 'react';

const JokeApp = () => {
    const [joke, setJoke] = useState('');

    const fetchJoke = async () => {
        try {
            const response = await fetch("https://icanhazdadjoke.com/", {
                headers: {
                    Accept: "application/json"
                }
            });
            console.log(response)
            const data = await response.json();
            setJoke(data.joke);
        } catch (error) {
            console.error('Error fetching joke:', error);
        }
    };

    return (
        <div>
            <h1>Dad Joke Generator</h1>
            <button onClick={fetchJoke}>Get Joke</button>
            {joke && <p>{joke}</p>}
        </div>
    );
};

export default JokeApp;
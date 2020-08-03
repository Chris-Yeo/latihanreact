import React from 'react'

import Hero from "../components/hero";



const Home =() => {
    const Discover =() => {
        console.log('Discover Our COurses')
    };

    const Find = () => {
        console.log('Find a Campus')
    };

    return (
        <div>
            <Hero
            title="Interested in joining the #1 ranked coding bootcamp?"
            description="We are in 39 cities worldwide."
            titleButton1="Discover our Courses"
            action1={Discover}
            titleButton2="Find a Campus"
            action2={Find}
            />
        </div>
    );
}

export default Home;
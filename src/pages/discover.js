import React from 'react'

import Hero from "../components/hero";



const DiscoverAll =() => {
    const Discover =() => {
        console.log('Discover Our Courses')
    };

    const Find = () => {
        console.log('Find a Campus')
    };

    return (
        <div>
            <Hero
            title="Search Our Campus and Join Now!"
            description="We are in 39 cities worldwide."
            titleButton1="Apply Now"
            action1={Discover}
            titleButton2="See More"
            action2={Find}
            />
        </div>
    );
}

export default DiscoverAll;
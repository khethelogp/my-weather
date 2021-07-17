import React from 'react';

const Location = ({city, country, temp, description}) => {
    const weatherConditions = ['clear','sun'];

    return (  
        <div className="location">
                <div className="data">
                    <h1>{city}, {country}</h1>
                    <h3>Current</h3>
                    <h2>{Math.round(temp)}°C</h2>
                    <h4>{description}</h4>
                </div>
                <div className="data-icon">
                    <ion-icon name={`${description}-outline`}></ion-icon>
                </div>
        </div>
    );
}
 
export default Location;
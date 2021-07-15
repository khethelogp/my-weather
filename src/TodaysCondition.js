const TodaysCondition = () => {
    return ( 
        <div className="todays-condition">
            <h2>Today's Weather Condition</h2>
            <div className="condition">
                <h4>Humidity</h4>
                <h4>35%</h4>
            </div>
            <div className="condition">
                <h4>Feels Like</h4>
                <h4>28°C</h4>
            </div>
            <div className="condition">
                <h4>Min Temp</h4>
                <h4>5°C</h4>
            </div>
            <div className="condition">
                <h4>Max Temp</h4>
                <h4>31°C</h4>
            </div>
            <div className="condition">
                <h4>Condition</h4>
                <h4>Clear Skies</h4>
            </div>
            <div className="condition">
                <h4>Wind Direction</h4>
                <h4>NW</h4>
            </div>
                <div className="condition">
                <h4>Wind Speed</h4>
                <h4>9 km/h</h4>
            </div>
            <div className="condition">
                <h4>Pressure</h4>
                <h4>1029</h4>
            </div>
        </div>
     );
}
export default TodaysCondition;
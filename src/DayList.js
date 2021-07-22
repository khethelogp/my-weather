import { setIcon } from "./setIcon";

const Daylist = ({ days }) => {

    function setDay(d) {
        var dayname = new Date(d.dt * 1000).toLocaleDateString("en", {
            weekday: "long",
        });

        return dayname.slice(0,3);
    }

    return ( 
        <div className="day-list">
            {days.map((day) => (
                    <div className="day">
                    <h3>{setDay(day)}</h3>
                    {/* <i class={day.weather[0].main}></i> */}
                    <i class={`bi bi-${setIcon(day.weather[0].main)}`}></i>
                    <p>{Math.round(day.temp.max)}° <small>{Math.round(day.temp.min)}°</small></p>
                </div>
            ))}
        </div>
    );
}

export default Daylist;
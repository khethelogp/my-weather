
const Daylist = ({ days }) => {

    return ( 
        <div className="day-list">
            {days.map((day)=> (
                    <div className="day">
                    <h3>{(day.day).slice(0, 3)}</h3>
                    <i class={day.icon}></i>
                    <p>{Math.round(day.max)}° <small>{Math.round(day.min)}°</small></p>
                </div>
            ))}
        </div>
    );
}
 
export default Daylist;
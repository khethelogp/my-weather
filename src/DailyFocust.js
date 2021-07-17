const DailyFocust = () => {
    return ( 
            <div className="daily-focust">
                <div className="day">
                <h3>Sun</h3>
                <i className="fas fa-sun"></i>
                <ion-icon name="sunny-outline"></ion-icon>
                <p>31° <small>5°</small></p>
                </div>
                <div className="day">
                <h3>Mon</h3>
                <i className="fas fa-sun"></i>
                <ion-icon name="sunny-outline"></ion-icon>
                <p>22° <small>6°</small></p>
                </div>
                <div className="day">
                <h3>Tue</h3>
                <i className="fas fa-sun"></i>
                <ion-icon name="sunny-outline"></ion-icon>
                <p>15° <small>5°</small></p>
                </div>
                <div className="day">
                <h3>Wed</h3>
                <i className="fas fa-cloud"></i>
                <ion-icon name="cloud-outline"></ion-icon>
                <p>10° <small>1°</small></p>
                </div>
                <div className="day">
                <h3>Thu</h3>
                <i className="fas fa-cloud-rain"></i>
                <ion-icon name="rainy-outline"></ion-icon>
                <p>12° <small>5°</small></p>
                </div>
                <div className="day">
                <h3>Fri</h3>
                <i className="fas fa-sun"></i>
                <ion-icon name="sunny-outline"></ion-icon>
                <p>15° <small>5°</small></p>
                </div>
                <div className="day">
                <h3>Sat</h3>
                <i className="fas fa-cloud-showers-heavy"></i>
                <ion-icon name="rainy-outline"></ion-icon>
                <p>11° <small>5°</small></p>
                </div>
            </div>
        );
}

export default DailyFocust;
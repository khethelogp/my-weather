(this["webpackJsonpmy-weather"]=this["webpackJsonpmy-weather"]||[]).push([[0],{11:function(e,c,n){},14:function(e,c,n){"use strict";n.r(c);var t=n(1),s=n.n(t),a=n(6),i=n.n(a),r=(n(11),n(2)),d=n.n(r),o=n(4),l=n(3),u="ccc62bdb7a2967c2cfdfa36001161aed",h="https://api.openweathermap.org/data/2.5/",j=n(0),b="",m=function(e){var c=e.city,n=e.country,t=e.temp,s=e.description,a={Thunderstorm:"cloud-lightning-rain",Rain:"cloud-rain-heavy",Drizzle:"cloud-drizzle",Snow:"cloud-snow",Mist:"cloud-fog2",Smoke:"cloud-haze-1",Haze:"cloud-haze",Dust:"cloud-haze2-fill",Fog:"cloud-fog2",Sand:"tornado",Ash:"cloud-snow",Squall:"wind",Tornado:"tornado",Hurricane:"hurricane",Clear:"sun",Cloud:"cloud",Clouds:"clouds"},i=new Date,r=i.getHours();i.getMinutes();switch(s){case"Thunderstorm":case"Rain":case"Drizzle":case"Snow":case"Mist":case"Smoke":case"Haze":case"Dust":case"Fog":case"Sand":case"Ash":case"Squall":case"Tornado":case"Hurricane":case"Cloud":case"Clouds":b=a[s];break;default:b=r>18?"moon":"sun",r<6&&(b="moon")}return Object(j.jsxs)("div",{className:"location",children:[Object(j.jsxs)("div",{className:"data",children:[Object(j.jsxs)("h1",{children:[c,", ",n]}),Object(j.jsx)("h3",{children:"Current"}),Object(j.jsxs)("h2",{children:[Math.round(t),"\xb0C"]}),Object(j.jsx)("h4",{children:s})]}),Object(j.jsx)("div",{className:"data-icon",children:Object(j.jsx)("i",{class:"bi bi-".concat(b)})})]})};function x(e){var c="",n={Thunderstorm:"cloud-lightning-rain",Rain:"cloud-rain-heavy",Drizzle:"cloud-drizzle",Snow:"cloud-snow",Mist:"cloud-fog2",Smoke:"cloud-haze-1",Haze:"cloud-haze",Dust:"cloud-haze2-fill",Fog:"cloud-fog2",Sand:"tornado",Ash:"cloud-snow",Squall:"wind",Tornado:"tornado",Hurricane:"hurricane",Clear:"sun",Cloud:"cloud",Clouds:"clouds"},t=new Date;t.getHours(),t.getMinutes();switch(e){case"Thunderstorm":case"Rain":case"Drizzle":case"Snow":case"Mist":case"Smoke":case"Haze":case"Dust":case"Fog":case"Sand":case"Ash":case"Squall":case"Tornado":case"Hurricane":case"Cloud":case"Clouds":c=n[e];break;default:c="sun"}return c}var O=function(e){var c=e.days;return Object(j.jsx)("div",{className:"day-list",children:c.map((function(e){return Object(j.jsxs)("div",{className:"day",children:[Object(j.jsx)("h3",{children:(c=e,new Date(1e3*c.dt).toLocaleDateString("en",{weekday:"long"}).slice(0,3))}),Object(j.jsx)("i",{className:"bi bi-".concat(x(e.weather[0].main))}),Object(j.jsxs)("p",{children:[Math.round(e.temp.max),"\xb0 ",Object(j.jsxs)("small",{children:[Math.round(e.temp.min),"\xb0"]})]})]});var c}))})},p=function(e){var c=e.longitude,n=e.latitude,s=c,a=n,i=Object(t.useState)(null),r=Object(l.a)(i,2),b=r[0],m=r[1];Object(t.useEffect)((function(){x()}),[s]);var x=function(){var e=Object(o.a)(d.a.mark((function e(){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h,"onecall?lat=").concat(a,"&lon=").concat(s,"&exclude=current,hourly,minutely,alerts&units=metric&appid=").concat(u));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,m(n.daily);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"daily-focust",children:b&&Object(j.jsx)(O,{days:b})})},f=function(e){var c,n=e.humidity,t=e.feels,s=e.minTemp,a=e.maxTemp,i=e.condition,r=e.windDirection,d=e.windSpeed,o=e.pressure,l=e.sunrise,u=e.sunset;function h(e){var c=new Date(1e3*e),n=("0"+c.getHours()).slice(-2),t=("0"+c.getMinutes()).slice(-2);return"".concat(n,":").concat(t)}return Object(j.jsxs)("div",{className:"todays-condition",children:[Object(j.jsx)("h2",{children:"Today's Weather Condition"}),Object(j.jsxs)("div",{className:"condition",children:[Object(j.jsx)("h4",{children:"Humidity"}),Object(j.jsxs)("h4",{children:[n,"%"]})]}),Object(j.jsxs)("div",{className:"condition",children:[Object(j.jsx)("h4",{children:"Feels Like"}),Object(j.jsxs)("h4",{children:[Math.round(t),"\xb0C"]})]}),Object(j.jsxs)("div",{className:"condition",children:[Object(j.jsx)("h4",{children:"Min Temp"}),Object(j.jsxs)("h4",{children:[Math.round(s),"\xb0C"]})]}),Object(j.jsxs)("div",{className:"condition",children:[Object(j.jsx)("h4",{children:"Max Temp"}),Object(j.jsxs)("h4",{children:[Math.round(a),"\xb0C"]})]}),Object(j.jsxs)("div",{className:"condition",children:[Object(j.jsx)("h4",{children:"Condition"}),Object(j.jsx)("h4",{children:i})]}),Object(j.jsxs)("div",{className:"condition",children:[Object(j.jsx)("h4",{children:"Wind Direction"}),Object(j.jsx)("h4",{children:function(e){switch(!0){case e>0&&e<90:c="NE";break;case e>90&&e<180:c="SE";break;case e>180&&e<270:c="SW";break;case e>270&&e<360:c="NW";break;default:c="-"}return c}(r)})]}),Object(j.jsxs)("div",{className:"condition",children:[Object(j.jsx)("h4",{children:"Wind Speed"}),Object(j.jsxs)("h4",{children:[Math.round(d)," km/h"]})]}),Object(j.jsxs)("div",{className:"condition",children:[Object(j.jsx)("h4",{children:"Pressure"}),Object(j.jsx)("h4",{children:o})]}),Object(j.jsxs)("div",{className:"condition",children:[Object(j.jsx)("h4",{children:"Sunrise"}),Object(j.jsx)("h4",{children:h(l)})]}),Object(j.jsxs)("div",{className:"condition",children:[Object(j.jsx)("h4",{children:"Sunset"}),Object(j.jsx)("h4",{children:h(u)})]})]})},v=function(){var e=Object(t.useState)({}),c=Object(l.a)(e,2),n=c[0],s=c[1],a=Object(t.useState)(""),i=Object(l.a)(a,2),r=i[0],b=i[1],x=Object(t.useState)("Pretoria"),O=Object(l.a)(x,2),v=O[0],w=O[1];Object(t.useEffect)((function(){y()}),[v]);var y=function(){var e=Object(o.a)(d.a.mark((function e(){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h,"weather?q=").concat(v,"&units=metric&APPID=").concat(u));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,s(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"app ".concat(function(){var e;return n.main&&(e=n.weather[0].main.toLowerCase()),e}()),children:Object(j.jsx)("main",{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"grid-wrapper",children:[Object(j.jsx)("div",{className:"searchBar",children:Object(j.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),w(r),b("")},children:[Object(j.jsx)("input",{className:"search-bar",type:"text",placeholder:"Enter a Town or City",value:r,onChange:function(e){b(e.target.value)}}),Object(j.jsx)("button",{type:"submit",title:"search",children:Object(j.jsx)("i",{class:"bi bi-search"})})]})}),n.main&&Object(j.jsx)(m,{city:n.name,country:n.sys.country,temp:n.main.temp,description:n.weather[0].main},n.weather.id),n.main&&Object(j.jsx)(p,{longitude:n.coord.lon,latitude:n.coord.lat},n.weather.id),n.main&&Object(j.jsx)(f,{humidity:n.main.humidity,feels:n.main.feels_like,minTemp:n.main.temp_min,maxTemp:n.main.temp_max,condition:n.weather[0].description,windDirection:n.wind.deg,windSpeed:n.wind.speed,pressure:n.main.pressure,sunrise:n.sys.sunrise,sunset:n.sys.sunset},n.weather.id)]})})})})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.65be0df0.chunk.js.map
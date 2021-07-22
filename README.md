# React Weather APP

[Live Demo :eyes:](https://khethelogp.github.io/my-weather/)

Screenshots:
![](https://i.ibb.co/9bKyWvY/my-weather-desktop.png) 

![](https://i.ibb.co/NYPPzRk/my-weather-mobile.png)

---

The weather application is composed of the following components:

* Search-box - Gets City Or Town name from user

* Location - Displays weather information for the entered location.

* Daily Focust - Displays 7 day Focust from current day

* Todays Weather Condition - Displays all the conditions of today's weather 

Features:

* Display current weather
* Displays 7 days focust
* Display current weather icon   
* Displays an Image showcasing the  current weather condition in background

This project also demonstrates:

* a typcial React project layout structure
* [OpenWeather API] integration

---

## Developed With

* [Visual Studio Code](https://code.visualstudio.com/) - A source code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control, syntax highlighting, intelligent code completion, snippets, and code refactoring
* [React](https://reactjs.org/) - A javascript library for building user interfaces
* [OpenWeather API] - Provides weather information

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following software is required to be installed on your system:

* Node 8.x
* Npm 3.x

Type the following commands in the terminal to verify your node and npm versions

```bash
node -v
npm -v
```

### Install

Follow the following steps to get development environment running.

* Clone _'my-weather'_ repository from GitHub

  ```bash
  git clone https://github.com/khethelogp/my-weather
  ```

   _OR USING SSH_

  ```bash
  git clone git@github.com:khethelogp/my-weather.git
  ```
  * Install node modules

   ```bash
   cd weather-App
   npm install
   ```

Before continuing, the following steps are required:

1. Get API keys

   * OpenWeather API

     Have a look at [OpenWeather API](http://openweathermap.org/api)

     Get an API key [here](http://openweathermap.org/appid)

### Build

* Build application

  This command will also run ESLint as part of build process.

  ```bash
  npm run build
  ```

* Build application and start watching for changes

  This command will also run ESLint as part of build process.

  ```bash
  npm run build:watch
  ```
  ### Run ESlint

* Lint project using ESLint

  ```bash
  npm run lint
  ```

* Lint project using ESLint, and autofix

  ```bash
  npm run lint:fix
  ```
  
### Run

* Run start

  This will run the _'serve'_ npm task

  ```bash
  npm start
  ```
  
* Alternatively run live-server (simple development http server with live reload capability)

  ```bash
  npm run serve
  ```

---

## References
https://github.com/khethelogp/my-weather



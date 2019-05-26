Main functionality of the application is to get a ViaPlay movie URL and return the Youtube trailers.

**This is a Typescript/Nodejs/Express app.**

This project is based on **MVC** pattern. 

There are some modules used in this project, important ones are :
- request-promise
- ramda (functional programming)
- jest 
- express
- nodemon


```
The file structure is like blew 

+ src 
    + common ( usually for helper modules) 
    + controller 
    + config 
    + routes 
    + services (act as models in this sample) 
```

To write cleanner code and increase performance the **async/await** pattern is used so for setting up express middle-ware to be true async/await supporter there is a helper function (**awaitHandlerFactory**) which accepts a RequestHandler and returns a async/await middle-ware. We need to catch async RequestHandler's exceptions in order to prevent hang on requests so this **awaitHandlerFactory** help to catch the exception and call **next()** function.

All controllers return and RequestHandler and route modules have this duty to convert those RequestHadnlers using awaitHandlerFactory.

------

The main functionality of the app is to accept a ViaPlay movie URL and return list of trailers.

There is an http **POST** endpoint **/api/v1/trailer** which accepts **movie_url** in body and return array of trailers.

```
http://localhost:3000/api/v1/trailer
Method: POST
Body:
{ 
"movie_url" : "https://content.viaplay.se/pc-se/film/50-first-dates-2004"
}
```

and the result would look like below 

```
{
    result : [
    "https://www.youtube.com/watch?v=ErjP5xMTc8I",
    "https://www.youtube.com/watch?v=Vi1uewVWxos"
    ]
}
```

--------

To start app there are two ways

**1- Using Docker**
```
docker-compose up -d --build
```

**2- Start Manually**

First install modules
```
yarn 
```
Then start project using ***yarn start***
```
yarn start
```
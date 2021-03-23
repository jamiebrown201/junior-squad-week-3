# Junior Squad Week 3: This site is a Joke - using an api in javascript

Hello Juniors. We are ready for our next tutorial! This week we are going to be helping to create a Joke app, which will display a new joke every time you refresh the app. We are going to be using an [API](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/) which will provide you with a Joke in [JSON]() format. You will then use this joke to display it on the home page of the app.

Jamie Brown and Ania Bebb are here to help you at any point from 10:00AM to 12:30PM on a wednesday. Please dont hesitate to reach out at any point. We can jump on calls or answer slack messages so please reach out if you are stuck. _Remember there is no such thing as a stupid question._

**By the end of the session we would like you to have pushed all your work up onto a branch and to open a pull request with your changes. Even if you havent completed the task please add any questions or comments to the pull request and we can help.**

We've setup an application already for you which will run a web server. The web server can respond to requests from `http://localhost:4040/` and that has already been set up for you in `index.js`.

## Requirements

To get started on working with the project, you'll need to make sure you have the following software tools installed.

1. [Git](https://git-scm.com/)
2. [Node.js](https://nodejs.org/en/) (version 14 or higher is required)
3. [npm](http://npmjs.com/)

Please note that this project has only been tested in Mac and Linux environments. If you are on a Mac you may find it easiest to install the [Command Line Tools](https://developer.apple.com/download/more/) package which includes Git.

## How do I set up the project?

1. Clone the Git repository and change to the new directory that has been created:

   ```bash
   git clone git@github.com:jamiebrown201/junior-squad-week-3.git
   cd junior-squad-week-3
   ```

2. Install all of the project dependencies and create configuration files:

   ```bash
   npm install
   ```

3. You can start and visit the running application on http://localhost:4040:

   ```bash
   npm run dev
   ```

## What do I need to do?

We want you to display the joke provided by the Joke API on the apps homepage.

1. So firstly the endpoint you will need to use for your random joke is here:

```
https://official-joke-api.appspot.com/random_joke
```

2. If you go to this link in your browser you will see the response you will be expecting to get back. You need to use this endpoint to make a `get` request using the request library [axios](https://github.com/axios/axios). I have set up a javascript file called `jokeApi.js` in the `lib` folder this is where you will want to make the request. You will have to understand what aysnc/await functions to do this is and ive added some resources at the bottom of this readme to guide you. Please reach out for help if you get stuck on this we can help explain.

3. You will then need to pass the result of that call down to the home view and display it on the `home.html` page where ive put a placeholder for `setup` and `punchline`.

4. If you have done this correctly you should be able to see a new joke everytime you refresh the page.

### Stretch goal

After you have completed this we want you to make a new page where instead of getting just one joke you get TEN jokes. The new endpoint you will be using is:

```
https://official-joke-api.appspot.com/random_ten
```

So in our app we want you to add a new function in your `jokeApi.js` and a new route in express so when you go to http://localhost:4040/ten you get 10 jokes instead of just 1.

## Userful resources

- To understand how to make api requests you will need to understand how javascript interprets your code. Javascript is asyncronous and you can find more information on what these means [here](https://blog.logrocket.com/understanding-asynchronous-javascript/). [Here](https://www.youtube.com/watch?v=PoRJizFvM7s) is a nice video if you prefer to follow along with that. Specifially we are using async/await to handle our request and here is a quick introduction to that [here](https://javascript.info/async-await). Please also reach out to us if you want help explaining this, it is a tricky concept.

- If you would like a guide to what we have already set up here with express you can follow [this guide](https://expressjs.com/en/starter/installing.html). The documentation for express can be found [here](http://expressjs.com/en/api.html).

- Handlebars is our templating engine that we are using for the views. If you want to learn a bit more about handlebars and how we use it [here](https://handlebarsjs.com/guide/#what-is-handlebars) is a quick introduction.

- We are using a request library called Axios which you can use to make your request to the Joke API. If you would like a small introduction tutorial you can follow along with [this](https://flaviocopes.com/axios/). You can find documentation for axios [here](https://github.com/axios/axios).

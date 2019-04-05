Fifth Project in the React100 * Module @ San Diego Code School

#Author - Michel Roberts JR.

#Modified by Travis Ripley * Started Thursday April 4th, 2019 16:30

I will be logging my updates as a work through this project.

# Very Simple ToDo App (VSTDA)

## Introduction

In this project you are going to build a Todo app using React that allows users to enter their todo items and prioritize them based on their importance.

![](https://i.imgur.com/E1EKrv1.png)

After you add a few items (with priorities set) it will look like this:

![](https://i.imgur.com/dTgmF5r.png)

You will also be able to edit items using the edit link, which should display another form:

![](https://i.imgur.com/aN8RhXz.png)

Lastly, you can mark an item as completed by checking its box.

To complete this project you will need to begin working with React's state mechanisms and applying the principle of composition.


## State

There are two types of data that control a component: `props` and `state`. `props` are set by the parent and they are fixed throughout the lifetime of a component. For data that is going to change, we have to use `state`.

In general, you should initialize `state` in the constructor, and then call `setState` when you want to change it. Review the documentation here [State and Lifecycle](https://facebook.github.io/react/docs/state-and-lifecycle.html) and then if you have not done so already, read [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html) to get an overview of how to think about composing a React application.

Composing applications in React is about breaking up the user interface into small (hopefully) reusable components. These components have a parent child relationship and data (via props) are passed from the parent component to its child components.

#### Remember: Do Not Modify State Directly!

```js
this.state.comment = 'Hello'; // Wrong

this.setState({comment: 'Hello'}); // Correct
```


## Building the app

First don't be afraid to refer back to [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html) if you get stuck. You should follow the same process to begin building this VSTDA:

## Getting Started
1. Open a terminal
1. Clone your starter files from [Github](https://github.com/SanDiegoCodeSchool/react100-vstda) and open the project in VS code.
1. Run: `npm install` to install all the dependencies.
1. As you add code to the project, you will want to view your progress in a browser. To do this, first type `npm run build` to compile your project. Then, type `npm start` to launch your project on a local webserver. In your console window, you should see the output `Server is listening on port 3000`. Open a browser to the url, `http://localhost:3000/` to render the project and view your progress.
1. The tests will confirm if you have completed the requirements. Type `npm test` and hit enter to run the tests. Then, write your code using the steps below. When you have written all the code to complete the project (based on the exit criteria) and the tests are passing, submit the assignment.


## Step 1 - Plan the UI

---

Draw out the User Interface (UI) hierarchy. Think about patterns in the UI that repeat, and sections of the UI that show or hide.  Also start thinking about the User's Experience (UX). What will change when the user clicks on buttons/links?


## Step 2 - Wireframe your Application

---

Create a wireframe for your application structure, using any tool or format you find effective. Check out draw.io for a good place to get started. Your wireframe should be a comprehensive breakdown of your React component structure, including which components will hold state, and which components will be nested within each other. Often times in React, we end up creating too many or too few components. Planning out the exact components you think you'll need, will help make the development process smoother.

> Important: Have your wireframe looked at and approved by an instructor before continuing with the rest of the steps.


## Step 3 - Make a Static App

---

After you scaffold this project using the desktop app, be sure to initialize a git repository.

Build a static version of the app in React. At this point it doesn't need to have all the styling, or look pretty at all.  But, it should have all the basic HTML structure. The key is to get it to the point where you have separate components that act as containers, forms, and  items that repeat.

Consider using List groups from Bootstrap

> List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.


## Step 4 - Make it Testable

---

Your app needs to be easily tested programatically. In the real world this is a best practice.  It is common to setup automated tests to ensure that your app is always functioning as required, even after updates are made to your code.

### Make sure your inputs are the correct elements and have these specific classNames added.

![](http://i.imgur.com/uimvonI.png)

### Same for these inputs and buttons.
### For the select element, make sure the options use 1, 2, 3 as values for the priority.

![](https://i.imgur.com/WRiJB8i.png)

Now would be a great time to commit your work to `git`. Create a new project on Github and push the code you have already written to your github account.

## Step 5 - Identify the represenation of the state

---

Consider how you will store/track whether a todo is currently being edited, so you will know when to show the edit form.  __Major Hint__: it could contain something like:

```js
{
  text: 'Take out the trash',
  priority: 2
}
```

and/or

```js
{
  editEnabled: true
}
```

## Step 6 - Where Should State Live

---

Identify where (in which component) your state should live. 

Remember to:

* Identify every component that renders something based on that state.

* Find a common owner component (a single component above all the components that need the state in the hierarchy).


## Step 7 - Add custom functions

---

Add your own custom functions to handle events:

* Update the state when the submit button(s) are clicked

* Update the view to show the edit form when a link is clicked

* Update the state when the delete link is clicked

* Update the state when the completed box is checked

Once the tests are passing, and you have met all the exit criteria below, be sure to commit your work and push it to github. Then move on to the bonus challenges.


## Exit Criteria

---

* User should be able to add new todo items with some text and a priority

* User should be able to edit a todo

* User should be able to delete a todo

* User should be able to mark a todo as completed

* Your latest code should be on Github


## Bonus

---

* Add the ability to sort the todo list based on priority

* Integrate the front end of this project with the back end express app you created previously in the `vstda-api`

## Project Submission

---

To submit this project, please commit your work to Github and deploy this website using Now.

```bash
# navigate to the project
$ cd ~/projects/{project-name}

# run "now" to deploy the site
$ now
```

After running that command, you should see the following output:

```bash
> Deploying ~/projects/{project-name} under your@email.com
> Ready! https://{project-name}-skckceswsd.now.sh (copied to clipboard)
```

And that's it! [Submit your project](https://goo.gl/forms/wx8DLSus7s88lk043) and you can move onto the next assignment.  An instructor will evaluate your work at a later time, giving feedback if necessary.

##

#Site deployed to Now at the following URL



#Thank you for taking the time to look at my projects,

#Also please follow my progress on youtube: 
https://www.youtube.com/channel/UCXv4p-lDYeWXPlnoRFYCSUg
# ![GA Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Star Wars API - React AJAX practice

<img src="https://i.imgur.com/go18uJE.jpg">

---

## Intro

In this deliverable, you'll consume the [Star Wars API](https://swapi.dev/) and render it's data.

## Set Up

To get set up:

- Fork and clone this repo
- Use `create-react-app .` to create a React app inside the current directory
- Open VS Code.
- Open a terminal in VS Code.
- Start the React Dev Server.

## Exercises

> Styling is secondary to completing the functionality

1. You should begin by familiarizing yourself with the API in postman. Hit the starships endpoint and explore the data that you get back.

2. In your `<App>` render a `<Starships>` component that obtains all of the starships from the SWAPI.

3. Your `<Starships>` component should map the data retrived from the SWAPI into to `<Starship>` components that get rendered. Include at least the **name** and **class** of the starship and any other data you think is interesting to show th user in the `<Starship>` component.

## Hints

- Hold the starships in state.

- You API call will need to go in a `useEffect` hook.

## Bonus

- you may notice that not many starships come back from the API's starship endpoint -- if you explore the data in postman you will find urls with query strings to get more pages of startships. Can you think of a way to integrate this into your app and show the user all of the starships?

- Enhance the `<Starship>` component list the names of the pilots for that starship by mapping the data to a `<Pilot>` component.
  - If the starship has no pilots, display a "No Pilots" message.

**HINT:** research mapping an array of pending promises and awaiting for them all with `Promise.all()`. This is much easier this `async/await`. But be careful! you will want to use `async/await` along with `useEffect` [correctly](https://harrisonstandeffer.com/async-await-in-react-use-effect-hooks/) in React!

- Style your App! There are [so many ways to style in react](https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822). Have some Fun!

---

Adapted from [react-ajax-swapi](https://github.com/WDI-SEA/react-ajax-swapi) to not use the react-router-dom

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.

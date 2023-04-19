# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Interactive rating component solution](#frontend-mentor---interactive-rating-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](/screenshot.jpg)

### Links

- GitHub Repo: [https://github.com/andrepaiva96/interactive-rating-component-main-fm](https://github.com/andrepaiva96/interactive-rating-component-main-fm)
- Live Site URL: [Add live site URL here](#)

## My process

### Built with

- HTML5
- SCSS & CSS
- JavaScript
- Flexbox
- Mobile-first workflow
- Sublime Merge
- Node.js
- NPM
- Git
- Lando
### What I learned

This challenge was amazing to get an understanding on how JavaScript is used with HTML and CSS elements.
I highly recommend this task to people who are just starting off there web development paths and careers.

I had to do a lot of problem solving in this project which was amazing especially with JavaScript. It was amazing to learn and use the skills a learnt throughout this project, especially in JavaScript.

Take the code below. I had an amazing time trying to get it to work wih the rest of my project.
```js
document.querySelectorAll('button[data-id]').forEach((button) => {
  button.addEventListener("click", () => {
    var value = button.getAttribute("data-id")
    document.getElementById("rating_number").innerHTML = value;
  });
});
```

### Continued development

For my future development I will further increase my skills in JavaScript. 

In addition, I will also continue my development in SCSS, Grid and Flexbox as these are very useful tools to know in and out.
### Useful resources

- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This helped me understand Flexboxes.
- [A Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - This helped me understand Grid Boxes.
- [HTML data-* Attributes](https://www.w3schools.com/tags/att_global_data.asp) - This helped me understand Data Attributes.
## Author

- Frontend Mentor - [@andrepaiva96](https://www.frontendmentor.io/profile/andrepaiva96)
- GitHub - [Andre Paiva](https://github.com/andrepaiva96)

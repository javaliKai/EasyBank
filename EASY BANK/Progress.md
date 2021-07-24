# MY PROGRESS TRACKER
# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Workflow](#workflow)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Glossary](#glossary)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

## My process

### Built with

- HTML5
- SASS 
- Javascript

### Workflow

Building the website start with the mobile template

  1. Working with the header section (logo, navbar).
  2. Move to hero.
  3. Feature with flexbox.
  4. Articles with css grid.
  5. finally, footer with css grid-template-area.

### What I learned

- setting the live sass compiler export path by changing the save path value in the extension's format settings.

- using helper class to apply css style to many elements conveniently.

- sass ampersand (&) is used to nest selector (parent -> child) whereas & refers to the parent selector.

- creating sass variable using ($) 

- defining font-size using rem, convert px to rem divide by 16

- using sass map (key value pair) to work with mixins variable for breakpoints

- researching other people method to do some stuff in developing web is a good practice, but be sure to not copy their code directly, instead grab the concept and build from scratch.

- you can't transition from display: block to none. Another way to do is to modify the opacity property.

- using classList.contains and classList.remove to add and remove a class from html element thru js.

- implementing keyframes.

- when applying position absolute, make sure the parent element is position relative.

- when working with flexbox and image, flexbox has an auto sizing for the image content. So, in order to resize the image to 100% of its parent width, we should add the css rules to the image/content itself rather than the parent container.

- using flex-wrap to make the flex items to be in the next row rather than in one row widely.

- background-image vs image tag, if you want to adjust the cropping position of an image, you can use background-image. Add the background-image using inline style in the div.

- implementing css grid to make the article section. work similar with flexbox, only you have to set up the template yourself.

- setting up grid with auto-fit and minmax().

- use gap property to add spacing to the grid items.

- when applying a border-radius, make sure to add overflow hidden for the property to work.

- implementing grid-template-area to create the fotoer section. This feature is very cool!

- aligning grid items horizontally using 'justify-items', vertically using 'align-items'. Align grid items horizontally and individually by using 'justify-self'.

- adding alternative caption into svg tag using title tag.

- styling svg color using svg path selector and edit the 'fill' property.

- there's some kind of error I encountered with live sass compiler while working with grid-template-area. I don't know why but it shows 'Autoprefix Error'. But, the web style is still working fine as it is.

### Continued development

I might combine this project with the MERN stack to build a full content of web application.

### Useful resources

- Coder Coder, helped me to build this whole project.


### Glossary 
CTA Button: Click-to-Action button to prompt an immediate response.

Hamburger Menu: A three dashes that act as a button to toggle a navigation bar.

Hero: a big wide banner image.


## Author

- Instagram: @tommyniclas

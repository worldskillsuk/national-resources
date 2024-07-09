# 3 - Front-End Development

## Introduction

In this module, you will be required to create a website following a set of client requirements.

You can write your solution in HTML, CSS and JS. You can use any allowed libraries or frameworks (e.g., React, Vue, or Svelte) if you prefer.

You have 3 hours for this task.

## Task Requirements

You are tasked with building an online art gallery website that showcases artworks generated using artificial intelligence (AI). The website's goal is to promote the capabilities of AI and make users interested to learn more about the tools and techniques used to generate the artworks.

The look and feel of the website is down to your creativity. However, the website should offer an engaging user experience, complete with smooth animations and multiple forms of interaction.

### Gallery

Create an aesthetically-pleasing grid of featured artworks.

Each artwork must be displayed as an image thumbnail.

Implement a hover effect on the thumbnails. At minimum, the hover effect must enlarge the artwork.

### Artwork Details Modal

Clicking on an artwork thumbnail must open a modal containing details of that artwork.

Inside the modal, display the full-size image, along with additional details such as its title, description and country.

The country should be the actual country name and not the country code. For example:

- `GB-ENG` is 'England'
- `GB-CYM` is 'Wales'
- `GB-SCT` is 'Scotland'
- `GB-NIR` is 'Northern Ireland'
- `JP` is 'Japan'

Include a button to close the modal. The modal should take into account diffrent screen sizes.

### Artwork Data

All artwork data must be read from the [artworks.json](media/artworks.json) file. Use JS to read the JSON.

All artwork details should be included in the website.

### Artwork Images

All images must be from the [media/images](media/images) folder.

All artwork images should be included in the website.

### Navigation

It must be possible to share artworks with others. So, each artwork must have its own URL that, when navigated to from outside the website, must show the artwork's details.

When viewing a new artwork, update the URL to contain the artwork's slug. The slug is a short identifier and must appear as part of the path or as a fragment.

When closing the artwork details modal, the URL must not contain an artwork's slug.

Navigating between artworks from within the gallery should not trigger a page refresh.

### Filters

Implement a country filter that allows the user to select either no countries (default) or one country. Once selected, only those artworks for that country should be shown.

Implement a search bar that filters artworks based on keywords.

The user must be able to input a search value that can be matched against an artwork's title or description.

### Animations

Implement smooth transitions between artworks (e.g., fade-in/fade-out or slide-in/slide-out).

Add subtle animations (e.g., fade-in, slide-in) when elements appear on the screen.

Add subtle animations (e.g., fade-out, slide-out) when elements disappear from the screen.

### Responsive Design

Ensure the website looks good on various devices (e.g., desktop, tablet and mobile).

Use media queries to adjust layout and font sizes accordingly.

### Media Files

Media files can be found in the [media](media) folder.

The JSON data should not be modified in any way.

You may create optimised image files for thumbnails. However, the original images must be shown in the artwork details modal.

### Validation

Your website must use valid HTML, CSS and JS.

## Instructions

- Aim to meet all the requirements set out.
- Focus on following best practices for front-end development.
- Write descriptive comments to assist other developers in understanding your code.
- Make use of the provided media files where required.

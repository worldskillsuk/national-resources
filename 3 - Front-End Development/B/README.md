# 3 - Front-End Development

## Introduction

In this module, you will be required to create a web application following a set of client requirements.

You can write your solution in HTML, CSS and JS. You can use any allowed libraries or frameworks (e.g., React, Vue, or Svelte) if you prefer.

You have 3 hours for this task.

## Task Requirements

You have been approached by a small local software development agency. The agency is looking to outsource one of their projects to you and you have agreed to collaborate with them on this.

The project involves creating a new in-browser graphics editor. Its goal is to provide a free, modern alternative to Microsoft Paint.

It is expected that the web application will go through more iterations before it is ready to be deployed. Your goal is to create the initial version with some key features so that your client has a functioning prototype to test.

### Areas

The web application is to have two main areas: a toolbar and a canvas.

#### Toolbar

The toolbar should provide several tools for creating graphics. These tools should resemble buttons and must be selectable by using mouse clicks and key presses.

Each tool must have a descriptive text label to make it clear to the user what the tool does. Each tool may also feature a graphic you create.

The toolbar should be minimal such that it is easily accessible without distracting the user's attention away from the graphics they create.

#### Canvas

The canvas should be a plain colour and fill the rest of the space not filled by the toolbar.

### Shapes

The toolbar should have three tools for creating shapes:

- one for creating squares;
- one for creating circles; and
- one for creating triangles.

Selecting a shape tool should allow the user to draw the corresponding shape on the canvas, such that:

- selecting the square tool allows a square to be drawn;
- selecting the circle tool allows a circle to be drawn; and
- selecting the triangle tool allows a triangle to be drawn.

Once a shape has been selected, the user must be able to draw by clicking on the canvas. Then, with the mouse button held down, the user must be able to drag such that the shape grows as along with the mouse movement. Once the shape is at the desired size, it must be possible to stop the drawing by releasing the mouse button.

A drawn shape will have a fill colour and a border colour.

### Colours

The toolbar must contain two tools for controlling the appearance of the drawn shapes:

- a fill colour; and
- a border colour.

Clicking or pressing on these tools must allow the user to change the corresponding colour. This should open a colour selector that allows choosing a colour represented by hexadecimal colour code.

Initially, the fill colour must be set to #DFEBEB, and the border colour must be set to #A8D1D1.

Whatever colours are selected should be used to style the shapes when they are drawn on the canvas.

### Cursor

The toolbar must have a cursor tool for selecting shapes after they have been drawn on the canvas.

#### Selection

When the cursor is selected, the user must be able to click on a drawn shape to select it. It should be possible to select one shape at once.

#### Movement

Once a shape is selected, an extra border should show to indicate that it has been selected. The colour of the extra border must be #FD8A8A.

The user must be able move the shape around the canvas. Releasing the mouse button must stop the movement.

#### Deletion

Once a shape is selected, it must be possible to delete the shape by pressing the `DELETE` or `←` (`BACKSPACE`) keys, such that the shape is no longer shown.

#### De-selection

Clicking on an empty space on the canvas (i.e., a part not occupied by a shape) must de-select any selected shape.

### Export

There should be tools for exporting the graphics. When clicked or pressed, a download must be prompted that allows the user to save a generated image to their device.

It should be possible to save an image in two file formats: JPEG and PNG. It must be possible for the user to select which format to use, either with:

- a single export button and a file format toggle; or
- two export buttons (one for each file format).

When saving as a JPEG, the background colour must be the same as that of the canvas.

When saving as a PNG, the background of the downloaded image should be transparent.

### Clearing the Canvas

There should be a tool that, when clicked or pressed, will clear the canvas.

All shapes should be removed such that the canvas is as it was before the user began drawing.

The progress saved in the user's local storage should also be deleted so that the user can start again from scratch.

### Automatic Saving

The web application must provide an auto-save feature. After a change has been made, the user's work must be saved to local storage.

On each page load, the user's work must be retrieved from local storage and displayed on the canvas so that the user can continue where they left off.

Refreshing the page should not clear the canvas.

### Design

There are no strict design guidelines enforced by the client; they look forward to seeing your creativity and flair in your choice of colour, typography and other styling.

However, the web application should look sleek and modern.

### Devices

Your client expects this initial version to run on desktop only, with the target screen dimensions being 1920 × 1080.

You do not need to make your user interface responsive for smaller screen sizes.

### Media

There are no media files provided for this task. You must demonstrate that you can create all necessary elements yourself.

## Instructions

- Aim to meet all the requirements set out.
- Focus on following best practices for front-end development.
- Write descriptive comments to assist other developers in understanding your code.

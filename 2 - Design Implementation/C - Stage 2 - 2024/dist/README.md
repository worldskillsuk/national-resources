# WorldSkills UK 2024 Web Development Stage 2

## Introduction

In this module, you will be required to create a web page following a given design and a set of client requirements.

You can write your solution in HTML, CSS and JS, and you can use any of the following front-end frameworks (optional): React, VUE, Vite or Svelte along with Bootstrap or Tailwind. <span style="color:red">No other packages, libraries or frameworks are permited</span>. 

You should consider accessibility by checking your work using browser developer tools or extensions such as:

* **axeDevTools** - available for  [Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?pli=1) |  [Firefox](https://addons.mozilla.org/en-GB/firefox/addon/axe-devtools/) | [Edge](https://microsoftedge.microsoft.com/addons/detail/axe-devtools-web-access/kcenlimkmjjkdfcaleembgmldmnnlfkn)
* **WAVE** - available for [Chrome](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?pli=1) | [Firefox](https://addons.mozilla.org/en-US/firefox/addon/wave-accessibility-tool/) | [Edge](https://microsoftedge.microsoft.com/addons/detail/wave-evaluation-tool/khapceneeednkiopkkbgkibbdoajpkoj)

**If the submitted work contains additional libraries/frameworks/packages, no marks will be awarded.**

The TP <span style="color:red"><u>will not use any CDN</u></span> (content delivery network); everything must be stored locally in your project folder. The TP will utilize specific web fonts provided by FontAwesome.

NOTE1:  <span style="color:#8b0000">_The Test Project (TP) does not require any  framework to be used/implemented; it is your decision whether to use them or not. If you do use any of the frameworks, the submitted solution must be functional as is. No attempts will be made by the assessors to fix or manipulate the code in any way._</span> 

NOTE2: <span style="color:#8b0000">_Any AI tool (e.g. ChatGPT, Copilot) are totally forbidden. If evidence of usage of those tools is found, no marks will be awarded. You can use Devdocs.io for technical documentation._</span>

**You have 3 hours to complete this task.**

_At the end of these 3 hours you will need to submit (upload) your project using the specified naming format and location._

## Task Requirements

As the 2024 national competitions cycle begins, WorldSkills UK is broadening its promotional activities. Given the increased interest in this year's competition-based development programme, the charity would like to highlight the individual skills competitions it has on offer.

You have been approached by WorldSkills UK's marketing team to implement a single web page that promotes the Web Development category. They have already put together a simple design and need you to create a functioning prototype from this design.

Your goal is to achieve near pixel perfection; your solution should match the provided design as closely as possible.

The mock-ups can be found in the [examples/](examples/) folder (1920 x 1080.png & 415 x 915.png) 

### Fonts

Variations of the Open Sans font are to be used throughout the web page, namely _Regular_ and _Bold_.

### Colours

The main colours to be used throughout the web page are: 
<span style="background-color:#003764; color: white; padding: 4px 8px; border-radius: 4px;">#003764</span> and <span style="background-color:#E1251B; color: white; padding: 4px 8px; border-radius: 4px;">#E1251B</span>.

Additionally, for the cube faces, the colours: 
<span style="background-color:#008C45; color: white; padding: 4px 8px; border-radius: 4px;">#008C45</span> and <span style="background-color:#F7E017; padding: 4px 8px; border-radius: 4px;">#F7E017</span>.


### Favicons

Two images are provided for the web page's favicon: one 32x32 and one 16x16.

Include both images so that the browser displays a favicon in the tab.

### General Layout

The web page should be responsive and work on all screen sizes. The maximum width of the page content is, 1000px.

The page title should be "WorldSkills UK Web Development 2024" and the logo should be resized to have a maximum height of 64px.

### Work Organisation

All files used for your solution should be named appropriately and organised into folders where suitable, following good maintainability principles.

When styling your web page, <span style="color:red"><u>you must not use inline styles</u></span>.

### Sections

As per the design, the web page should be divided into the following sections:

* Top Navigation
* Hero
* About the Web Development Skills Competition
* Insights
* Call-To-Action (CTA) Section
* Contact
* Footer Section 1
* Footer Section 2
* Registration Modal

#### Top Navigation

The top navigation section contains links to other sections further down the page. It also has a call-to-action (CTA) for opening the registration modal. The menu and “Register” button have a hover effect	

![Navigation Menu](https://drive.google.com/uc?export=view&id=1E8H5GzwokSWsIXo8UGjOsIzYXrCEWtUS)

When clicking on a link in this section, the window must scroll to the related section further down the page. The scroll should be smooth and not instant.

The top navigation should be 'sticky', such that it remains at the top of the page when scrolling. After scrolling down at least 50px, the logo should be smaller and the entire navigation should have a slight shadow to contrast with the rest of the page's content.

On devices with smaller screens, the links and CTA should be hidden and a toggle must be shown instead. By default, this toggle must have a 'hamburger' icon. When pressed, the icon must change to an 'X' icon and the links and CTA should be shown. Pressing the toggle again should close the menu and change the icon back to a 'hamburger' icon.

#### Hero Section

The hero section contains some short promotional text followed by two call-to-action buttons with hover effect.

![Hero Buttons](https://drive.google.com/uc?export=view&id=1Z08g-ldue3JFL0_nEl_UQCkw2P-7s_1o)

There is a video that plays in the background of this section. The video should cover the section fully and automatically play on page load in loop.

Over the video it should be an blue overlay and the informative text. The buttons will have a hover effect.

#### About the Web Development Skills Competition

The purpose of this section is to introduce the Web Development category of WorldSkills UK's 2024 skills competitions.

The cards have a hover effect with an animation from left to right. 

![Cart on page load](https://drive.google.com/uc?export=view&id=1ThpKKwyzA6Dus6JWTZ6K_sn3JymOKmG9) ![Cart on hover](https://drive.google.com/uc?export=view&id=1Qg8GrfGYg2jFl2ZKyd8MBf4FZM2G3YbB)

Also, it contains some descriptive text along core competencies, both listed and shown on a cube.

The cube is designed to draw the user's attention to the core competencies. Each of the six faces shows one competency.

Opposite faces share the same colour, such that:

* The front and back are both red with the texts:
  *  _Work Organisation and Management_ 
  *  _Communication and Interpersonal Skills_
* The top and bottom are both green with the texts:
  * _Front-End Development_
  * _Back-End Development_
* The left and right are both yellow with the texts:
  * _Design Implementation_
  * _Speed_

The cube must have an animation applied so that it continuously spins around. The animation should show each face at least once, following the given example in the [examples/](examples/) folder (_sample-cube-rotation.mp4_).

![Cube](https://drive.google.com/uc?export=view&id=1X-CkdKNzX_ihhL_UVrXoz8OTT5mcng4w)

#### <u>Insights Section</u>

The insights section should include some statistics about WorldSkills UK's skills competitions.

However, this section has not been designed yet. Instead, an area is marked on the design indicating where the content should be.

![Insight Section](https://drive.google.com/uc?export=view&id=1CnNAdn7vhssthKjLjIZBKJeBs42N_XI6)


Within the marked area, you should use your creativity to create this section yourself. You have control over how this section looks, but you should ensure it matches the overall design.

No text is provided for this section. You can use the already provided text as a placeholder or use some “lorem ipsum” paragraphs.

At minimum, you must include at least two of the following statistics:

> 60% of competitors report higher earnings

> 150,000+ young people engaged with our work last year

> 95% of FE colleges engaged with our work

> 82% of young people felt inspired by us

For each statistic, include both the value and supporting text. You can change the case (capitalisation), but must otherwise keep the text the same.

Enhance the section's visual appeal by adding unique elements. You can incorporate files from the provided media or create your own to elevate the design.

#### Call-To-Action (CTA) Section

The CTA section provides another opportunity for the user to register for this year's competitions. It contains some short promotional text and a button for opening the registration modal.

The background should include the WorldSkills emblem (_ws-emblem.png_). The emblem should appear transparent so that there is sufficient contrast with the colour of the text.

To create a sense of depth and movement, there should be an fixed-background scrolling effect. This means that, when the user scrolls, the foreground content moves whilst the background remains stationary.

#### <u>Footer 2 Section</u>

The footer menu has a small hover animation left from right underline (see sample-footer-hovers.mp4)

![Footer Menu on page load](https://drive.google.com/uc?export=view&id=12rd05QZW1RF2UxLCuaemsFtNzMb_kK-u) ![Footer Menu on hover](https://drive.google.com/uc?export=view&id=1lxiYMb1fFsV4M0hYGu_ohs610nOvncGr)


The year (2024) should be dynamically updated and not hard-coded.

The social icons must change to the blue colour on hover (see sample-footer-hovers.mp4).

![Social icons on hover](https://drive.google.com/uc?export=view&id=1rMaJKkoHdPgetnISlM--zWxRlFer2h34)

#### Registration Modal

The registration modal must not be visible by default. Clicking any 'Register' button on the page (outside the registration modal) should open the registration modal.

When the registration modal is open, it should be in the centre of the screen. There should be a backdrop that darkens and blurs the content beneath the modal.

The user should be presented with a form. This form must contain a text input and an email input. Use the correct input type for each.

The form must contain some minimal validation such that it cannot be submitted unless both input fields have a value entered.

Assume that, when the form is submitted, the data would be posted to a server. As such, when clicking the 'Register' button to submit the form, the URL should not contain query parameters from the data. You do not need to handle the back-end processing of form submissions.

Clicking the close button (with an 'X' icon) or cancel button must close the modal.

## Icons

All icons used in this task are from the FontAwesome library. You must use the provided FontAwesome library for this task.

The [examples/](examples/) folder contains some notes on how to use FontAwesome.

You should only use minified files from FontAwesome that are required for this task.

The icons used in this project are under [examples/fontawesome-example/assets/](examples/fontawesome-example/assets/)

### Icons used in the TP 

_Section - "Who Do We Help?"_
> fa-graduation-cap <i class="fas fa-graduation-cap"></i>
> fa-seedling <i class="fas fa-seedling"></i>
> fa-briefcase <i class="fas fa-briefcase"></i>

_Section - "Benefits"_
> fa-trophy <i class="fas fa-trophy"></i> 
> fa-arrow-trend-up <i class="fas fa-arrow-trend-up"></i>
> fa-globe <i class="fas fa-globe"></i>

_Section - "What is the Web Development Skills Competition?"_
> fa-cube <i class="fas fa-cube"></i> 

_**Note**: You can add more icons if you wish when designing the Insights section._

## Example Files

To further illustrate the design, some aditional files have been provided in the [examples/](examples/) folder.

Look at these files and try to match what they show as closely as possible.

## Media Files

Some media files are provided for you to use when creating the web page.

| Media       | Details                                    |
|-------------|--------------------------------------------|
| FontAwesome | See [node_modules/](node_modules/) folder. |
| Fonts       | See [node_modules/](node_modules/) folder. |
| Images      | See [images/](images/) folder.             |
| Video       | See [images/](images/) folder.             |
| Examples    | See [images/](examples/) folder.           |


You must not modify the provided media files with any editing software (e.g. Photoshop) but you can create your own.

If you feel you need to re-install the files inside the [node_modules/](node_modules/) folder, run the relevant command in your terminal, e.g., `npm install`.

### Submission
Archive your project using native archive software on Windows/Mac or 7ZIP, naming the archive with your competitor code that was sent via email (e.g., d4c1.zip). You need to submit it in your own dedicated folder **no later than 13:00**.

### General Marking Scheme

| NO | Criteria               | Total<br>Marks |
| ---| ---------------------- |----------------|
| A1 | General Layout         | 10 |
| A2 | Design Implementation  | 25 |
| A3 | Responsiveness         | 5  |
| A4 | Organisation           | 5  |
| A5 | Maintainability        | 5  |

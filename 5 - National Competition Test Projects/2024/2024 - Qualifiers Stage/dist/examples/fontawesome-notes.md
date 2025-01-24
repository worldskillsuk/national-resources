# FontAwesome

The following are simplified notes from the official documentation: https://docs.fontawesome.com/web/setup/host-yourself/webfonts.

## Add FontAwesome Assets

You can find FontAwesome assets in [node_modules/@fortawesome/fontawesome-free/](../node_modules/@fortawesome/fontawesome-free/) folder. This folder contains both development (`.css`) files and minified (`.min.css`) files for production.

1. Copy the `/webfonts` folder into a folder inside your project
2. Copy the `/css` folder into a folder inside your project
3. Import the stylesheets files needed for this task in your HTML's `<head />` element

You will need to import `fontawesome[.min].css` and the other stylesheets required for the styles used in this task.

This task only requires the `solid` and `brands` styles. You do not need to keep the stylesheets for other styles.

See [fontawesome-example/](fontawesome-example/) for an example of how this can be done.

## Icons for the Task

The icons used in the task are as follows:

### Solid

* `fa fa-graduation-cap`
* `fa fa-seedling`
* `fa fa-briefcase`
* `fa fa-trophy`
* `fa fa-arrow-trend-up`
* `fa fa-globe`
* `fa fa-phone`
* `fa fa-envelope`
* `fa fa-map-pin`

### Brands

* `fa-brands fa-facebook`
* `fa-brands fa-instagram`
* `fa-brands fa-twitter`
* `fa-brands fa-youtube`

# December Labs - Part 4
This repository contains a Nightwatch.js project for automating end-to-end tests of web applications. Nightwatch.js is a powerful and easy-to-use Node.js-based testing framework that utilizes the W3C WebDriver API to interact with web browsers.

## Introduction
Nightwatch.js provides a comprehensive testing framework for automating browser-based tests. This project aims to demonstrate a structured approach to organizing and writing Nightwatch.js tests for efficient and maintainable test automation.

Nightwatch.js supports various browsers, including Chrome, Firefox, and Safari, and provides a rich set of features for interacting with web elements, executing assertions, and handling asynchronous operations.

## Getting Started
To get started with this project, follow these steps:

1. Clone the repository:
```
git clone thub.com/CYael-Izquierdo/dl-3.git
```
2. Install the dependencies:
```
cd dl-3
npm install
```
## Page Objects in Nightwatch.js
Page Objects are a design pattern used to organize and encapsulate the functionality and interactions with web pages or components in automated tests. By using Page Objects, we can separate the test code from the details of the UI, making tests more readable, modular, and maintainable.

In Nightwatch.js, Page Objects can be implemented using JavaScript classes or modules. Each Page Object represents a specific page or component of the application and contains methods to interact with the UI elements on that page.

Here's an example of how a Page Object might look using JavaScript classes:

```
// page_objects/LoginPage.js

module.exports = {
  elements: {
    usernameInput: {
      selector: '[data-test=username-input]'
    },
    passwordInput: {
      selector: '[data-test=password-input]'
    },
    loginButton: {
      selector: '[data-test=login-button]'
    }
  },

  commands: [{
    typeUsername(username) {
      return this.setValue('@usernameInput', username);
    },

    typePassword(password) {
      return this.setValue('@passwordInput', password);
    },

    clickLoginButton() {
      return this.click('@loginButton');
    }
  }]
};
```
## Running Tests
To run the tests, use the following command:
```
npm run test
```
## Future Improvements
I hadn't used this framework before, and found it quite interesting. I'm sure tests can be abstracted further using custom commands.

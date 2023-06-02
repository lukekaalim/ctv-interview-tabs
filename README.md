# README #

This README would normally document whatever steps are necessary to get your application up and running.

## What is this repository for?

* This is a React based exercise for potential candidates for the CTV team.
* It is a simplified version of our `<TabbedGrid>` component
  
## Prompts for the Intervieww

* Our team has built all of the separate pieces we need to put together our new `<TabbedGrid>` component
* This is plain React, all of the styling has been done for you
* `response.json` contains an example payload from the server.
* We can have any number of tabs, and each tab can have any number of cards.

INSERT PICTURE OR GIF HERE

### Requirements

1. Tabs should dynamically display based on `/data/response.json`
2. We want the first tab to automatically be selected on page load
3. Whenever a tab is selected we want to show the associated cards

### Extension questions

1. How can we make this more performant? 
2. How would you go about loading or error?
   

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
```

## Testing

To run unit tests:

```sh
npm test
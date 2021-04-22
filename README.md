# Tweeter Project
Tweeter is a simple, single-page Twitter clone.

Applided my  HTML, CSS, JS, jQuery and AJAX front-end skills, and my Node, Express and MongoDB back-end skills. To create this fully functional single page web app called tweeter (very original).

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser 1.15.2 or above
- chance 1.0.2 or above
- md5 2.1.0 or above

## Functionality 

- This single page web app allows the user to create new tweets and have them posted onto their feed with no need of refreshing the page
- Tweets are displayed along with a random generated name and avatar along with the date it was created. (ex: just now, 30 seconds ago,   10 days ago)
- While creating a new tweet a character counter is tracking the number of characters imputted and if it goes over the limit an error message will be displayed if that tweet is atempted to be posted. An error message will also be displayed if an empty tweet is trying to be posted.
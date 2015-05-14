Diamond Dog v1.0
==============

![Diamond Dogs](/public/img/diamond_dogs.png)

An Express.js & Node.js powered framework for apps and sites, similar to Site-Starter.

Server Instructions:
-------------------

* Make sure [Node.js](https://nodejs.org/) and NPM are installed
* Clone this repo and go into its folder
* `npm install` will locally install all required Node modules
* `node app.js` to run the server
* Go to [localhost:3000](http://localhost:3000/) in your browser
* If you wish to auto-restart the server after every change to `app.js`, install Nodemon with `npm install -g nodemon`, and use `nodemon app.js`.

PING Testing:
-------------

* Opening [localhost:3000/ping](http://localhost:3000/ping) makes sure the server is running and receiving GET requests.
* Sending a POST request to [localhost:3000/ping](http://localhost:3000/ping) makes sure the server is receiving POST requests.

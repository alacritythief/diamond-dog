Diamond Dog v1.0
==============

![Diamond Dogs](/public/img/diamond_dogs.png)

An Express.js & Node.js powered framework for apps and sites, similar to Site-Starter.

What's Included:
----------------

* [Express.js](http://expressjs.com/)
* [Jade templating](http://jade-lang.com/) (similar to HAML)
* [Stylus CSS](https://learnboost.github.io/stylus/) support (no need to run grunt!)
* [body-parser](https://github.com/expressjs/body-parser) for parsing POST requests
* [cookie-parser](https://github.com/expressjs/cookie-parser) for retrieving and setting cookies
* [csurf](https://github.com/expressjs/csurf) for CSRF protection (make sure you insert a hidden CSRF token in your forms)

Server Instructions:
-------------------

* Make sure [Node.js](https://nodejs.org/) and NPM are installed with `brew install node`
* `git clone` this repo and go into its folder
* `npm install` will locally install all required Node modules
* `node app.js` to run the server
* Go to [localhost:3000](http://localhost:3000/) in your browser
* If you wish to auto-restart the server after every change to `app.js`, install Nodemon with `npm install -g nodemon`, and use `nodemon app.js`.

Need Database Support?
----------------------

* Check this [Express.js guide](http://expressjs.com/guide/database-integration.html) on supporting various DBs such as Mongo, Postgres, and Redis.
* If you need an ORM for SQL, try out [Sequelize](http://docs.sequelizejs.com/en/latest/) or [node-orm](https://github.com/dresende/node-orm2).
* If you need an ORM for Mongo, try out [Mongoose](http://mongoosejs.com/).

PING Testing:
-------------

* Opening [localhost:3000/ping](http://localhost:3000/ping) makes sure the server is running and receiving GET requests.
* Sending a POST request to [localhost:3000/ping](http://localhost:3000/ping) makes sure the server is receiving POST requests.

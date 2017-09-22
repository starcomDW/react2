/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	"use strict";

	var _ReactRouter = ReactRouter;
	var Router = _ReactRouter.Router;
	var Route = _ReactRouter.Route;
	var IndexRoute = _ReactRouter.IndexRoute;
	var IndexLink = _ReactRouter.IndexLink;
	var hashHistory = _ReactRouter.hashHistory;
	var Link = _ReactRouter.Link;

	var Home = React.createClass({
	  displayName: "Home",

	  render: function render() {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h2",
	        null,
	        "HELLO"
	      ),
	      React.createElement(
	        "p",
	        null,
	        "Cras facilisis urna ornare ex volutpat, et convallis erat elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
	      ),
	      React.createElement(
	        "p",
	        null,
	        "Duis a turpis sed lacus dapibus elementum sed eu lectus."
	      )
	    );
	  }
	});

	var Contact = React.createClass({
	  displayName: "Contact",

	  render: function render() {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h2",
	        null,
	        "GOT QUESTIONS?"
	      ),
	      React.createElement(
	        "p",
	        null,
	        "The easiest thing to do is post on our ",
	        React.createElement(
	          "a",
	          { href: "http://forum.kirupa.com" },
	          "forums"
	        ),
	        "."
	      )
	    );
	  }
	});

	var Stuff = React.createClass({
	  displayName: "Stuff",

	  render: function render() {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h2",
	        null,
	        "STUFF"
	      ),
	      React.createElement(
	        "p",
	        null,
	        "Mauris sem velit, vehicula eget sodales vitae, rhoncus eget sapien:"
	      ),
	      React.createElement(
	        "ol",
	        null,
	        React.createElement(
	          "li",
	          null,
	          "Nulla pulvinar diam"
	        ),
	        React.createElement(
	          "li",
	          null,
	          "Facilisis bibendum"
	        ),
	        React.createElement(
	          "li",
	          null,
	          "Vestibulum vulputate"
	        ),
	        React.createElement(
	          "li",
	          null,
	          "Eget erat"
	        ),
	        React.createElement(
	          "li",
	          null,
	          "Id porttitor"
	        )
	      )
	    );
	  }
	});

	var App = React.createClass({
	  displayName: "App",

	  render: function render() {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h1",
	        null,
	        "Simple SPA"
	      ),
	      React.createElement(
	        "ul",
	        { className: "header" },
	        React.createElement(
	          "li",
	          null,
	          React.createElement("img", {
	            src: "images/starcom_logo.png",
	            width: "70",
	            height: "20",
	            alt: "Starcom"
	          })
	        ),
	        React.createElement(
	          "li",
	          null,
	          React.createElement(
	            Link,
	            { to: "/" },
	            "Home"
	          )
	        ),
	        React.createElement(
	          "li",
	          null,
	          React.createElement(
	            Link,
	            { to: "/stuff" },
	            "Stuff"
	          )
	        ),
	        React.createElement(
	          "li",
	          null,
	          React.createElement(
	            Link,
	            { to: "/contact" },
	            "Contact"
	          )
	        )
	      ),
	      React.createElement(
	        "div",
	        { className: "content" },
	        this.props.children
	      )
	    );
	  }
	});

	var destination = document.querySelector("#container");

	ReactDOM.render(React.createElement(
	  Router,
	  { history: hashHistory },
	  React.createElement(
	    Route,
	    { path: "/", component: App },
	    React.createElement(IndexRoute, { component: Home }),
	    React.createElement(Route, { path: "stuff", component: Stuff }),
	    React.createElement(Route, { path: "contact", component: Contact })
	  )
	), destination);

/***/ })
/******/ ]);
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

	'use strict';

	var App = React.createClass({
	  displayName: 'App',

	  loadEmployeesFromServer: function loadEmployeesFromServer() {
	    var self = this;
	    $.ajax({
	      url: "http://localhost:8080/employees/get"
	    }).then(function (data) {
	      // this didn't work self.setState({employees: data._embedded.employees});
	      self.setState({ employees: data });
	    });
	  },

	  getInitialState: function getInitialState() {
	    return { employees: [] };
	  },

	  componentDidMount: function componentDidMount() {
	    this.loadEmployeesFromServer();
	  },

	  render: function render() {
	    return React.createElement(EmployeeTable, { employees: this.state.employees });
	  }
	});

	var Employee = React.createClass({
	  displayName: 'Employee',

	  getInitialState: function getInitialState() {
	    return { display: true };
	  },
	  handleDelete: function handleDelete() {
	    var id = this.props.employee.id;
	    var self = this;
	    $.ajax({
	      url: 'http://localhost:8080/employees/delete/' + id,
	      type: 'DELETE',
	      success: function success(result) {

	        self.setState({ display: false });
	      },
	      error: function error(xhr, ajaxOptions, thrownError) {}
	    });
	  },
	  render: function render() {
	    if (this.state.display == false) return null;

	    return React.createElement(
	      'tr',
	      null,
	      React.createElement(
	        'td',
	        null,
	        this.props.employee.name
	      ),
	      React.createElement(
	        'td',
	        null,
	        this.props.employee.age
	      ),
	      React.createElement(
	        'td',
	        null,
	        this.props.employee.years
	      ),
	      React.createElement(
	        'td',
	        null,
	        this.props.employee.department
	      ),
	      React.createElement(
	        'td',
	        null,
	        React.createElement(
	          'button',
	          { className: 'btn btn-info', onClick: this.handleDelete },
	          'Delete'
	        )
	      )
	    );
	  }
	});

	var EmployeeTable = React.createClass({
	  displayName: 'EmployeeTable',

	  render: function render() {
	    var rows = [];
	    this.props.employees.forEach(function (employee) {
	      rows.push(React.createElement(Employee, { employee: employee }));
	    });
	    return React.createElement(
	      'table',
	      { className: 'table table-striped' },
	      React.createElement(
	        'thead',
	        null,
	        React.createElement(
	          'tr',
	          null,
	          React.createElement(
	            'th',
	            null,
	            'Name'
	          ),
	          React.createElement(
	            'th',
	            null,
	            'Age'
	          ),
	          React.createElement(
	            'th',
	            null,
	            'Years'
	          ),
	          React.createElement(
	            'th',
	            null,
	            'Department'
	          ),
	          React.createElement(
	            'th',
	            null,
	            'delete'
	          )
	        )
	      ),
	      React.createElement(
	        'tbody',
	        null,
	        rows
	      )
	    );
	  }
	});

	ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

/***/ })
/******/ ]);
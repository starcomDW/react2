var { Router,
      Route,
      IndexRoute,
      IndexLink,
      hashHistory,
      Link } = ReactRouter;
      
      
var Contact = React.createClass({
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
	displayName : 'EmployeeTable',

	render : function render() {
		var rows = [];
		this.props.employees.forEach(function(employee) {
			rows.push(React.createElement(Employee, {
				employee : employee
			}));
		});
		return React.createElement(
			'table',
			{
				className : 'table table-striped'
			},
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

var destination = document.querySelector("#container");

ReactDOM.render(React.createElement(
		  Router,
		  { history: hashHistory },
		  React.createElement(
		    Route,
		    { path: "/", component: App },
		    React.createElement(IndexRoute, { component: Home }),
		    React.createElement(Route, { path: "products", component: Products }),
		    React.createElement(Route, { path: "shop", component: Shop }),
		    React.createElement(Route, { path: "orders", component: Orders }),
		    React.createElement(Route, { path: "stuff", component: Stuff }),
		    React.createElement(Route, { path: "contact", component: Contact })
		  )
		), destination);

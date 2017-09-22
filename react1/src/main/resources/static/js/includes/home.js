var Home = React.createClass({
	displayName : "Home",

	render : function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h2",
				null,
				"Home page"
			),
			React.createElement(
				"p",
				null,
				"This is the home page"
			)
		);
	}
});